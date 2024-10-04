import { IProduct } from '../product'
import ICartItem from './ICartItem'

export default class Cart {
	/**
	 * Creates a new Cart instance.
	 * @param items - The initial array of cart items.
	 */
	constructor(readonly items: ICartItem[] = []) {}

	/**
	 * Adds a product to the cart.
	 * @param product - The product to add.
	 * @returns A new Cart instance with the added product.
	 */
	addItem(product: IProduct): Cart {
		const item = this.itemByProduct(product)
		if (item) {
			return new Cart(this.changeItemQuantity(this.items, product, 1))
		} else {
			return new Cart([...this.items, { product, quantity: 1 }])
		}
	}

	/**
	 * Removes one unit of a product from the cart.
	 * @param product - The product to remove.
	 * @returns A new Cart instance with the updated items.
	 */
	removeItem(product: IProduct): Cart {
		const item = this.itemByProduct(product)
		if (!item) return this

		return new Cart(this.changeItemQuantity(this.items, product, -1))
	}

	/**
	 * Removes all units of a product from the cart.
	 * @param product - The product to remove.
	 * @returns A new Cart instance without the specified product.
	 */
	removeProduct(product: IProduct): Cart {
		const item = this.itemByProduct(product)
		if (!item) return this

		return new Cart(this.items.filter((item) => item.product.id !== product.id))
	}

	/**
	 * Clears all items from the cart.
	 * @returns A new empty Cart instance.
	 */
	clear(): Cart {
		return new Cart()
	}

	/**
	 * Gets the total quantity of items in the cart.
	 */
	get itemCount(): number {
		return this.items.reduce((sum, item) => sum + item.quantity, 0)
	}

	/**
	 * Gets the total value of the cart using promotional prices.
	 */
	get totalValue(): number {
		return this.items.reduce((sum, item) => sum + item.product.promotionalPrice * item.quantity, 0)
	}

	/**
	 * Gets the total value of the cart using base prices.
	 */
	get totalBaseValue(): number {
		return this.items.reduce((sum, item) => sum + item.product.basePrice * item.quantity, 0)
	}

	/**
	 * Finds a cart item by its product.
	 * @param product - The product to search for.
	 * @returns The cart item if found, undefined otherwise.
	 */
	private itemByProduct(product: IProduct): ICartItem | undefined {
		return this.items.find((item) => item.product.id === product.id)
	}

	/**
	 * Changes the quantity of a product in the cart.
	 * @param items - The current cart items.
	 * @param product - The product to change.
	 * @param difference - The quantity to add (positive) or remove (negative).
	 * @returns A new array of cart items with the updated quantity.
	 */
	private changeItemQuantity(
		items: ICartItem[],
		product: IProduct,
		difference: number
	): ICartItem[] {
		return items
			.map((i) =>
				i.product.id === product.id ? { ...i, quantity: i.quantity + difference } : i
			)
			.filter((i) => i.quantity > 0)
	}
}