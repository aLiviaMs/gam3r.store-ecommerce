import { Currency } from '@gstore/core'
import { IconShoppingCart } from '@tabler/icons-react'
import Link from 'next/link'

/**
 * Props interface for the CartTotal component
 */
export interface CartTotalProps {
	itemCount: number
	totalValue: number
}

/**
 * CartTotal component
 * 
 * This component displays the total number of items and total value of the cart,
 * along with a button to proceed to the payment page.
 * 
 * @param props - The component props
 * @returns A React component that renders the cart total and checkout button
 */
export default function CartTotal(props: CartTotalProps) {
	return (
		<div className="flex justify-end items-center gap-7 bg-violet-dark h-24 rounded-xl px-7">
			<div className="flex flex-col">
				<span className="text-zinc-400">
					Total ({props.itemCount}{' '}
					{props.itemCount === 1 ? 'item' : 'items'}):
				</span>
				<span className="text-emerald-500 text-2xl font-semibold">
					{Currency.format(props.totalValue ?? 0)}
				</span>
			</div>
			<Link href="/checkout/payment" className="button bg-indigo-700">
				<IconShoppingCart size={20} />
				<span>Continue</span>
			</Link>
		</div>
	)
}