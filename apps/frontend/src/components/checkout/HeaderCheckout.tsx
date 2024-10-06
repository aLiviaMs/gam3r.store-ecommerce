import Link from 'next/link'

/**
 * Props interface for the CheckoutHeader component
 */
interface CheckoutHeaderProps {
	step: 'cart' | 'payment'
}

/**
 * CheckoutHeader component
 * 
 * This component renders a header for the checkout process,
 * showing the current step (cart or payment).
 * 
 * @param props - The component props
 * @returns A React component that renders the checkout header
 */
export default function CheckoutHeader(props: CheckoutHeaderProps) {
	/**
	 * Determines the text color based on the selected step
	 * 
	 * @param step - The step to check
	 * @returns A CSS class string for the text color
	 */
	function selectedColor(step: string) {
		return props.step === step ? 'text-pink-500' : 'text-zinc-400'
	}

	/**
	 * Determines the background color based on the selected step
	 * 
	 * @param step - The step to check
	 * @returns A CSS class string for the background color
	 */
	function selectedBackground(step: string) {
		return props.step === step
			? 'bg-pink-500 text-white'
			: 'bg-zinc-400 text-black'
	}

	/**
	 * Renders a single step item in the header
	 * 
	 * @param step - The step identifier
	 * @param index - The step number
	 * @param title - The step title
	 * @param path - The URL path for the step
	 * @returns A Link component for the step
	 */
	function renderItem(
		step: 'cart' | 'payment',
		index: number,
		title: string,
		path: string,
	) {
		return (
			<Link
				href={path}
				className={`
					flex items-center gap-2 cursor-pointer
					${selectedColor(step)}
				`}
			>
				<span
					className={`
						flex justify-center items-center 
						text-xs font-bold w-5 h-5 rounded-full 
						${selectedBackground(step)}
					`}
				>
					{index}
				</span>
				<span>{title}</span>
			</Link>
		)
	}

	return (
		<div className="flex justify-center items-center gap-6 h-20 select-none">
			{renderItem('cart', 1, 'Cart', '/checkout/cart')}
			<div className="bg-zinc-300 h-px w-12"></div>
			{renderItem('payment', 2, 'Payment', '/checkout/payment')}
		</div>
	)
}