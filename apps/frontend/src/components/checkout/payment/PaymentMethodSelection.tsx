import { EnumPurchaseType } from '@gstore/core'

/**
 * Props interface for the PaymentMethodSelection component
 */
export interface PaymentMethodSelectionProps {
	paymentMethod?: EnumPurchaseType
	onPaymentMethodChange?: (value: EnumPurchaseType) => void
	className?: string
}

/**
 * PaymentMethodSelection component
 * 
 * This component renders a selection of payment methods and allows the user to choose one.
 * 
 * @param props - The component props
 * @returns A React component that renders payment method selection buttons
 */
export default function PaymentMethodSelection(
	props: PaymentMethodSelectionProps,
) {
	/**
	 * Renders a single payment method selection button
	 * 
	 * @param label - The label for the payment method
	 * @param type - The PaymentMethod enum value
	 * @returns A button element for the payment method
	 */
	function renderItem(label: string, type: EnumPurchaseType) {
    const selected = props.paymentMethod === type
    
		return (
			<button
				className="flex items-center gap-3 bg-violet-dark rounded-lg h-12 px-7"
				onClick={() => props.onPaymentMethodChange?.(type)}
			>
				<span
					className={`
						${selected ? 'bg-emerald-500 border-emerald-500' : 'bg-transparent border-white'}
						w-5 h-5 border-2 rounded-full
					`}
				></span>
				<span>{label}</span>
			</button>
		)
	}

	return (
		<div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
			<span className="px-7 pb-2 text-xl font-bold text-white/70">
				Payment Method
			</span>
			<div className="flex flex-col gap-3">
				{renderItem('Bank', EnumPurchaseType.BANK)}
				{renderItem('Credit Card', EnumPurchaseType.CREDIT_CARD)}
			</div>
		</div>
	)
}