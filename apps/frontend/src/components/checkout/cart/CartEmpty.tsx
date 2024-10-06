import { IconShoppingCartOff } from '@tabler/icons-react'

/**
 * CartEmpty component
 * 
 * This component renders a message and icon when the shopping cart is empty.
 * 
 * @returns A React component that displays an empty cart message
 */
export default function CartEmpty() {
	return (
		<div className="flex-1 flex flex-col justify-center items-center text-violet-300 py-10">
			<IconShoppingCartOff size={180} stroke={0.5} />
			<span className="text-violet-300 font-light">
				Cart is Empty
			</span>
		</div>
	)
}