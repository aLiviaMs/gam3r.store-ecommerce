'use client'
import {
  EnumOrderStatus,
  EnumPurchaseType,
  IAddressOrder,
  ICartItem,
  IItemOrder,
  IOrder,
} from '@gstore/core'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import useAPI from '../hooks/useAPI'
import useCart from '../hooks/useCart'
import useLocalStorage from '../hooks/useLocalStorage'

/**
 * Interface for the Payment Context props
 */
export interface IPaymentContextProps {
	paymentMethod: EnumPurchaseType
	delivery: Partial<IAddressOrder>
	changePaymentMethod: (paymentMethod: EnumPurchaseType) => void
	changeDelivery: (delivery: Partial<IAddressOrder>) => void
	finalizePurchase: () => void
}

const PaymentContext = createContext<IPaymentContextProps>({} as IPaymentContextProps)

/**
 * Payment Provider component
 * @param props - The component props
 */
export function PaymentProvider(props: { children: React.ReactNode }) {
	const { httpPost } = useAPI()
	const { items, totalPrice, clearCart } = useCart()
	const { saveItem, getItem } = useLocalStorage()
	const router = useRouter()

	const [paymentMethod, setPaymentMethod] = useState<EnumPurchaseType>(
		EnumPurchaseType.CREDIT_CARD
	)
	const [delivery, setDelivery] = useState<Partial<IAddressOrder>>({})

	/**
	 * Changes the payment method and saves it to local storage
	 * @param paymentMethod - The new payment method
	 */
	function changePaymentMethod(paymentMethod: EnumPurchaseType) {
		saveItem('paymentMethod', paymentMethod)
		setPaymentMethod(paymentMethod)
	}

	/**
	 * Changes the delivery details and saves it to local storage
	 * @param delivery - The new delivery details
	 */
	function changeDelivery(delivery: Partial<IAddressOrder>) {
		saveItem('delivery', delivery)
		setDelivery(delivery)
	}

	/**
	 * Finalizes the purchase by creating an order and clearing the cart
	 */
	async function finalizePurchase() {
		const order: Partial<IOrder> = {
			date: new Date(),
			paymentMethod,
			totalValue: totalPrice,
			delivery: delivery as IAddressOrder,
			status: EnumOrderStatus.DELIVERED,
			items: items.map(
				(item: ICartItem) =>
					({
						product: item.product,
						quantity: item.quantity,
						unitPrice: item.product.promotionalPrice,
					}) as IItemOrder
			),
		}

		await httpPost('/orders', order)
		clearCart()
		router.push('/checkout/success')
	}

	useEffect(() => {
		const delivery = getItem('delivery')
		const paymentMethod = getItem('paymentMethod')
		if (delivery) setDelivery(delivery)
		if (paymentMethod) setPaymentMethod(paymentMethod)
	}, [getItem])

	return (
		<PaymentContext.Provider
			value={{
				delivery,
				paymentMethod,
				changeDelivery,
				changePaymentMethod,
				finalizePurchase,
			}}
		>
			{props.children}
		</PaymentContext.Provider>
	)
}

export default PaymentContext