'use client'

import CartEmpty from "@/src/components/checkout/cart/CartEmpty"
import CartItem from "@/src/components/checkout/cart/CartItem"
import CartTotal from "@/src/components/checkout/cart/CartTotal"
import CheckoutHeader from "@/src/components/checkout/HeaderCheckout"
import useCart from "@/src/data/hooks/useCart"


/**
 * Cart Page Component
 * 
 * This component renders the cart page, including the checkout header,
 * list of cart items, and cart total. It uses the useCart hook to
 * manage cart state and operations.
 * 
 * @returns A React component that renders the cart page
 */
export default function CartPage() {
	const { 
		items, 
		itemCount,
		totalPrice,
		addItem,
		removeItem,
		removeProduct,
	} = useCart()

	return (
		<div className="flex flex-col gap-5 container">
			<CheckoutHeader step="cart" />
			<div className="flex flex-col gap-4">
				{items.length === 0 && <CartEmpty />}
				{items.map(item => (
					<CartItem
						key={item.product.id}
						item={item}
						addItem={() => addItem(item.product)}
						removeItem={() => removeItem(item.product)}
						removeProduct={() => removeProduct(item.product)}
					/>
				))}
			</div>
			<CartTotal itemCount={itemCount} totalValue={totalPrice} />
		</div>
	)
}