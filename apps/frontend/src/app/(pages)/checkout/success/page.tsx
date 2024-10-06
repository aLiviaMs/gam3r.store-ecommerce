'use client'
import Image from 'next/image'

/**
 * SuccessPage Component
 * 
 * This component renders a success page after a successful order placement.
 * It displays a logo, a success message, and additional information.
 * 
 * @returns A React component that renders the success page
 */
export default function SuccessPage() {
	return (
		<div className="flex flex-col gap-7 container">
			<div className="flex flex-col justify-center items-center gap-5 py-20">
				<div className="relative w-72 h-72">
					<Image src="/logo.png" alt="Success" fill />
				</div>
				<div className="flex flex-col items-center text-center">
					<h1
						className="
							text-3xl font-bold
							bg-gradient-to-r from-white to-emerald-500
							bg-clip-text text-transparent
						"
					>
						Order Placed Successfully!
					</h1>
					<p className="text-zinc-500">
						You will receive an email with the details of your purchase.
					</p>
				</div>
			</div>
		</div>
	)
}