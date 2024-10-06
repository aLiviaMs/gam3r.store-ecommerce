import {
  IOrder as Order,
  IAddressOrder as OrderDelivery,
  IItemOrder as OrderItem,
  EnumPurchaseType as PaymentMethod,
  EnumOrderStatus as Status,
} from '@gstore/core'
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import useAPI from '../hooks/useAPI'
import useCart from '../hooks/useCart'
import useLocalStorage from '../hooks/useLocalStorage'

export interface PaymentContextProps {
	paymentMethod: PaymentMethod
	delivery: Partial<OrderDelivery>
	updatePaymentMethod: (paymentMethod: PaymentMethod) => void
	updateDelivery: (delivery: Partial<OrderDelivery>) => void
	finalizePurchase: () => Promise<void>
}

const PaymentContext = createContext<PaymentContextProps>({} as PaymentContextProps)

interface PaymentProviderProps {
	children: ReactNode
}

export function PaymentProvider({ children }: PaymentProviderProps) {
	const { httpPost } = useAPI()
	const { items, totalPrice: totalValue, clearCart } = useCart()
	const { saveItem, getItem } = useLocalStorage()

	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.BANK)
	const [delivery, setDelivery] = useState<Partial<OrderDelivery>>({})

	const updatePaymentMethod = useCallback((newPaymentMethod: PaymentMethod) => {
		saveItem('paymentMethod', newPaymentMethod)
		setPaymentMethod(newPaymentMethod)
	}, [saveItem])

	const updateDelivery = useCallback((newDelivery: Partial<OrderDelivery>) => {
		saveItem('delivery', newDelivery)
		setDelivery(newDelivery)
	}, [saveItem])

	const finalizePurchase = useCallback(async () => {
		const order: Partial<Order> = {
			date: new Date(),
			paymentMethod,
			totalValue,
			delivery: delivery as OrderDelivery,
			status: Status.DELIVERED,
			items: items.map((item) => ({
				product: item.product,
				quantity: item.quantity,
				unitPrice: item.product.promotionalPrice,
			}) as OrderItem),
		}

		try {
			await httpPost('/orders', order)
			clearCart()
		} catch (error) {
			console.error('Error finalizing purchase:', error)
			throw error
		}
	}, [httpPost, paymentMethod, totalValue, delivery, items, clearCart])

	useEffect(() => {
		const loadSavedData = async () => {
			const savedDelivery = await getItem('delivery')
			setDelivery(savedDelivery ?? {})

			const savedPaymentMethod = await getItem('paymentMethod')
			setPaymentMethod(savedPaymentMethod ?? PaymentMethod.BANK)
		}

		loadSavedData()
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