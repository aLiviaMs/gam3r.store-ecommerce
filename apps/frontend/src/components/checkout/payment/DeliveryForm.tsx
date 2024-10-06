import { IAddressOrder } from '@gstore/core'

/**
 * Props interface for the DeliveryForm component
 */
export interface DeliveryFormProps {
	delivery: Partial<IAddressOrder>
	onDeliveryChange: (delivery: Partial<IAddressOrder>) => void
	className?: string
}

/**
 * DeliveryForm component
 * 
 * This component renders a form for collecting delivery information.
 * 
 * @param props - The component props
 * @returns A React component that renders a delivery information form
 */
export default function DeliveryForm(props: DeliveryFormProps) {
	const { delivery, onDeliveryChange } = props

	/**
	 * Creates an event handler for updating a specific attribute of the delivery object
	 * 
	 * @param attribute - The name of the attribute to update
	 * @returns A function that handles the input change event
	 */
	function updateAttribute(attribute: string) {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			onDeliveryChange({ ...delivery, [attribute]: e.target.value })
		}
	}

	return (
		<div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
			<span className="px-7 pb-2 text-xl font-bold text-white/70">
				Delivery Information
			</span>
			<div className="flex flex-col gap-5 bg-violet-dark/50 rounded-xl p-6">
				<input
					placeholder="Full Name"
					value={delivery.name}
					onChange={updateAttribute('name')}
					className="input"
				/>
				<div className="flex gap-5">
					<input
						placeholder="Email"
						value={delivery.email}
						onChange={updateAttribute('email')}
						className="input flex-1"
					/>
					<input
						placeholder="Document"
						value={delivery.document}
						onChange={updateAttribute('document')}
						className="input flex-1"
					/>
				</div>
				<div className="flex gap-5">
					<input
						placeholder="Street Address"
						value={delivery.street}
						onChange={updateAttribute('street')}
						className="input flex-1"
					/>
					<input
						placeholder="Additional Info"
						value={delivery.complement}
						onChange={updateAttribute('complement')}
						className="input"
					/>
				</div>
				<div className="flex gap-5">
					<input
						placeholder="City"
						value={delivery.city}
						onChange={updateAttribute('city')}
						className="input flex-1"
					/>
					<input
						placeholder="State"
						value={delivery.state}
						onChange={updateAttribute('state')}
						className="input flex-1"
					/>
				</div>
			</div>
		</div>
	)
}