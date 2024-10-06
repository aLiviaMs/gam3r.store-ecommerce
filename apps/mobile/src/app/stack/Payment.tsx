import CheckoutHeader from '@/src/components/checkout/CheckoutHeader'
import DeliveryForm from '@/src/components/checkout/payment/DeliveryForm'
import PaymentMethodSelection from '@/src/components/checkout/payment/PaymentMethodSelection'
import PaymentSummary from '@/src/components/checkout/payment/PaymentSummary'
import useCart from '@/src/data/hooks/useCart'
import usePayment from '@/src/data/hooks/usePayment'
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

export default function Payment() {
	const { installment, itemCount, totalPrice: totalValue, totalFullPrice: fullTotalValue } = useCart()
	const { delivery, paymentMethod, updateDelivery, updatePaymentMethod, finalizePurchase } =
		usePayment()

	return (
		<SafeAreaView style={styles.container}>
			<CheckoutHeader step="payment" />
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Text style={styles.title}>Payment Method</Text>
				<PaymentMethodSelection
					paymentMethod={paymentMethod}
					onPaymentMethodChange={updatePaymentMethod}
				/>

				<Text style={styles.title}>Delivery Information</Text>
				<DeliveryForm delivery={delivery} onDeliveryChange={updateDelivery} />
			</ScrollView>

			<PaymentSummary
				itemCount={itemCount}
				totalValue={totalValue}
				fullTotalValue={fullTotalValue}
				installment={installment}
				finalizePurchase={finalizePurchase}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0E001D',
	},
	scrollContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFF',
	},
})