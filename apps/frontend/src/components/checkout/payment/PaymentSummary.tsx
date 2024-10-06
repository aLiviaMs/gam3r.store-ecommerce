import { Currency, IInstallment } from '@gstore/core'
import { IconCreditCard } from '@tabler/icons-react'

/**
 * Props interface for the PaymentSummary component
 */
export interface PaymentSummaryProps {
	itemCount: number
	totalValue: number
	fullTotalValue: number
	installment: IInstallment
	finalizePurchase: () => void
	className?: string
}

/**
 * PaymentSummary component
 * 
 * This component displays a summary of the payment details including
 * total value, discount, and installment options.
 * 
 * @param props - The component props
 * @returns A React component that renders the payment summary
 */
export default function PaymentSummary(props: PaymentSummaryProps) {
	return (
		<div
			className={`
				flex flex-col self-start gap-3 
				w-96 px-6 py-8
				bg-violet-dark rounded-xl
				${props.className ?? ''}
			`}
		>
			<span className="text-xl font-semibold">Summary:</span>
			<div className="flex justify-between">
				<span className="text-zinc-400">Payment Method:</span>
				<span>Bank/Credit Card</span>
			</div>
			<div className="flex justify-between">
				<span className="text-zinc-400">Total Value:</span>
				<span className="text-emerald-500 font-semibold">
					{Currency.format(props.fullTotalValue)}
				</span>
			</div>
			<div className="flex justify-between">
				<span className="text-zinc-400">Discount:</span>
				<span className="text-red-500 font-semibold">
					-{Currency.format(props.fullTotalValue - props.totalValue)}
				</span>
			</div>
			<div className="flex flex-col items-end">
				<span className="text-zinc-400">Bank payment</span>
				<span className="text-emerald-500 font-semibold text-2xl">
					{Currency.format(props.totalValue ?? 0)}
				</span>
			</div>
			<div className="flex flex-col items-end">
				<span className="text-sm text-zinc-300 mt-2">
					Credit Card Installment
				</span>
				<div className="text-sm text-zinc-300">
					up to{' '}
					<span className="text-white font-semibold">
						{props.installment.installmentCount}x
					</span>{' '}
					of{' '}
					<span className="text-white font-semibold">
						{Currency.format(props.installment.installmentValue)}
					</span>
				</div>
			</div>
			<button
				onClick={props.finalizePurchase}
				className="button bg-indigo-700 mt-7"
			>
				<IconCreditCard size={20} />
				<span>Finalize Purchase</span>
			</button>
		</div>
	)
}