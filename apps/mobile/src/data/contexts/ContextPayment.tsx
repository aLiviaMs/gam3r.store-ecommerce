import {
	IOrder as Order,
	IAddressOrder as OrderDelivery,
	IItemOrder as OrderItem,
	EnumPurchaseType as PaymentMethod,
	EnumOrderStatus as Status,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useAPI from '../hooks/useAPI'
import useCart from '../hooks/useCart'
import useLocalStorage from '../hooks/useLocalStorage'

export interface PaymentContextProps {
	paymentMethod: PaymentMethod
	delivery: Partial<OrderDelivery>
	updatePaymentMethod: (paymentMethod: PaymentMethod) => void
	updateDelivery: (delivery: Partial<OrderDelivery>) => void
	finalizePurchase: () => void
}

const PaymentContext = createContext<PaymentContextProps>({} as PaymentContextProps)

export function PaymentProvider({ children }: { children: React.ReactNode }) {
	const { httpPost } = useAPI()
	const { items, totalPrice: totalValue, clearCart } = useCart()
	const { saveItem, getItem } = useLocalStorage()

	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
		PaymentMethod.BANK
	)
	const [delivery, setDelivery] = useState<Partial<OrderDelivery>>({})

	function updatePaymentMethod(paymentMethod: PaymentMethod) {
		saveItem('paymentMethod', paymentMethod)
		setPaymentMethod(paymentMethod)
	}

	function updateDelivery(delivery: Partial<OrderDelivery>) {
		saveItem('delivery', delivery)
		setDelivery(delivery)
	}

	async function finalizePurchase() {
		const order: Partial<Order> = {
			date: new Date(),
			paymentMethod,
			totalValue,
			delivery: delivery as OrderDelivery,
			status: Status.DELIVERED,
			items: items.map(
				(item) =>
					({
						product: item.product,
						quantity: item.quantity,
						unitPrice: item.product.promotionalPrice,
					}) as OrderItem
			),
		}

		await httpPost('/orders', order)
		clearCart()
	}

	useEffect(() => {
		getItem('delivery').then((savedDelivery: any) => {
			setDelivery(savedDelivery ?? {})
		})
		getItem('payment').then((savedPaymentMethod: any) => {
			setPaymentMethod(savedPaymentMethod ?? PaymentMethod.BANK)
		})
	}, [getItem])

	return (
		<PaymentContext.Provider
			value={{
				delivery,
				paymentMethod,
				updateDelivery,
				updatePaymentMethod,
				finalizePurchase,
			}}
		>
			{children}
		</PaymentContext.Provider>
	)
}

export default PaymentContext