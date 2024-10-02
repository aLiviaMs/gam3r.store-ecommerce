import { IconDevicesPcOff } from '@tabler/icons-react'
import Link from 'next/link'

/**
 * Props for the ProductNotFound component.
 */
export interface ProductNotFoundProps {
	/** If true, the "Back" button will not be rendered. */
	withoutBackButton?: boolean
}

/**
 * ProductNotFound Component
 * 
 * This component displays a message and icon when a product is not found.
 * It optionally includes a "Back" button to return to the home page.
 * 
 * @param props - The properties for the ProductNotFound component.
 * @returns A React element representing the "Product Not Found" message and optional back button.
 * 
 * @example
 * ```tsx
 * <ProductNotFound />
 * ```
 * 
 * @example
 * ```tsx
 * <ProductNotFound withoutBackButton={true} />
 * ```
 */
export default function ProductNotFound({withoutBackButton}: ProductNotFoundProps) {
	return (
		<div className="flex-1 flex flex-col justify-center items-center text-violet-300">
			<IconDevicesPcOff size={180} stroke={0.5} />
			<span className="text-violet-300 font-light">Product not found</span>
			{!withoutBackButton && (
				<Link href="/" className="button bg-violet-700 text-white mt-5">
					Back
				</Link>
			)}
		</div>
	)
}