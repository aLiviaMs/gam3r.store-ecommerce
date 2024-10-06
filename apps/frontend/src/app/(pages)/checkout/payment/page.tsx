'use client'

import CheckoutHeader from "@/src/components/checkout/HeaderCheckout"
import DeliveryForm from "@/src/components/checkout/payment/DeliveryForm"
import PaymentMethodSelection from "@/src/components/checkout/payment/PaymentMethodSelection"
import PaymentSummary from "@/src/components/checkout/payment/PaymentSummary"
import useCart from "@/src/data/hooks/useCart"
import usePayment from "@/src/data/hooks/usePayment"


/**
 * Payment Page Component
 * 
 * This component renders the payment page of the checkout process,
 * including payment method selection, delivery form, and payment summary.
 * 
 * @returns A React component that renders the payment page
 */
export default function PaymentPage() {
	const { installment, itemCount, totalPrice, totalFullPrice } = useCart()
	const { delivery, paymentMethod, changeDelivery, changePaymentMethod, finalizePurchase } =
		usePayment()

	return (
		<div className="flex flex-col gap-7 container">
			<CheckoutHeader step="payment" />
			<div className="flex gap-5">
				<div className="flex-1 flex flex-col gap-5">
					<PaymentMethodSelection
						paymentMethod={paymentMethod}
						onPaymentMethodChange={changePaymentMethod}
					/>
					<DeliveryForm delivery={delivery} onDeliveryChange={changeDelivery} />
				</div>
				<PaymentSummary
					itemCount={itemCount}
					totalValue={totalPrice}
					fullTotalValue={totalFullPrice}
					installment={installment}
					finalizePurchase={finalizePurchase}
					className="mt-12"
				/>
			</div>
		</div>
	)
}