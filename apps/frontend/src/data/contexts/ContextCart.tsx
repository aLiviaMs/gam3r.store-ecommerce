'use client'
import {
  CalculateInstallment,
  Cart,
  ICartItem,
  IInstallment,
  IProduct,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ICartContextProps {
	items: ICartItem[]
	itemCount: number
	totalFullPrice: number
	totalPrice: number
	installment: IInstallment
	addItem: (product: IProduct) => void
	removeItem: (product: IProduct) => void
	removeProduct: (product: IProduct) => void
	clearCart: () => void
}

const CartContext = createContext<ICartContextProps>({} as ICartContextProps)

export function CartProvider(props: {children: JSX.Element}) {
	const { saveItem, getItem } = useLocalStorage()
  const [cart, setCart] = useState<Cart>(new Cart()) 

	function addItem(product: IProduct) {
		updateCart(cart.addItem(product))
	}

	function removeItem(product: IProduct) {
		updateCart(cart.removeItem(product))
	}

	function removeProduct(product: IProduct) {
		updateCart(cart.removeProduct(product))
	}

	function clearCart() {
		updateCart(cart.clear())
	}

	function updateCart(cart: Cart) {
		saveItem('cart', cart.items)
		setCart(cart)
	}

	useEffect(() => {
		const savedItems: ICartItem[] = getItem('cart')
		if (savedItems) setCart(new Cart(savedItems))
	}, [getItem])

	return (
		<CartContext.Provider
			value={{
				items: cart.items,
				itemCount: cart.itemCount,
				totalPrice: cart.totalBaseValue,
				totalFullPrice: cart.totalValue,
        installment: new CalculateInstallment().execute({value: cart.totalBaseValue}),
				addItem,
				removeItem,
				removeProduct,
				clearCart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContext