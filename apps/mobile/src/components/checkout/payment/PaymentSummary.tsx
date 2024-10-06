import Colors from '@/src/data/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Currency, IInstallment } from '@gstore/core'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export interface PaymentSummaryProps {
	itemCount: number
	totalValue: number
	fullTotalValue: number
	installment: IInstallment
	finalizePurchase: () => void
	className?: string
}

export default function PaymentSummary(props: PaymentSummaryProps) {
	return (
		<View style={styles.container}>
			<View style={styles.itemsValue}>
				<Text style={{ color: 'white' }}>Total value ({props.itemCount} items): </Text>
				<Text style={styles.itemsValueHighlight}>{Currency.format(props.totalValue)}</Text>
			</View>
			<Pressable style={styles.button} onPress={() => props.finalizePurchase?.()}>
				<Ionicons name="cart-outline" size={22} style={styles.buttonText} />
				<Text style={styles.buttonText}>Finalize Purchase</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 20,
		paddingHorizontal: 60,
		paddingVertical: 20,
		backgroundColor: '#241440',
		borderRadius: 10,
		gap: 10,
	},
	itemsValue: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemsValueHighlight: {
		color: '#34d399',
		fontWeight: 'bold',
	},
	button: {
		color: '#FFF',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.PRIMARY,
		borderRadius: 9999,
		height: 40,
		paddingHorizontal: 45,
		gap: 8,
	},
	buttonText: {
		color: '#FFF',
	},
})