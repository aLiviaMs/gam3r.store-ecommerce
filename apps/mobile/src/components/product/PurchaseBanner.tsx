import Colors from '@/src/data/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Currency, IProduct } from '@gstore/core'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import useCart from '../../data/hooks/useCart'
import useInstallment from '../../data/hooks/useInstallments'

export interface PurchaseBannerProps {
	product: IProduct
}

export default function PurchaseBanner(props: PurchaseBannerProps) {
	const { product } = props
	const { addItem } = useCart()
	const installment = useInstallment(product.promotionalPrice)

	return (
		<View style={styles.container}>
			<View style={styles.priceContainer}>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						borderRightWidth: 3,
						borderRightColor: Colors.PRIMARY,
					}}
				>
					<Text style={styles.fullPrice}>
						from $ {product?.basePrice}
					</Text>
					<View style={styles.promotionalPrice}>
						<Text style={styles.price}>to</Text>
						<Text style={styles.highlightPrice}>
							{Currency.format(product?.promotionalPrice)}
						</Text>
					</View>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text style={styles.price}>
						up to {installment.installmentCount}x of
					</Text>
					<Text style={styles.price}>
						{Currency.format(installment.installmentValue)}
					</Text>
				</View>
			</View>
			<View style={{ gap: 10 }}>
				<Pressable
					onPress={() => addItem(product)}
					style={{ ...styles.button, backgroundColor: Colors.PRIMARY }}
				>
					<Ionicons
						style={styles.buttonText}
						name="cart-outline"
						size={20}
					/>
					<Text style={styles.buttonText}>Add to Cart</Text>
				</Pressable>
				<Pressable
					onPress={() => {}}
					style={{
						...styles.button,
						backgroundColor: Colors.SECONDARY,
					}}
				>
					<Ionicons
						style={styles.buttonText}
						name="card-outline"
						size={20}
					/>
					<Text style={styles.buttonText}>Buy Now</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		gap: 30,
	},
	priceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	fullPrice: {
		textDecorationLine: 'line-through',
		color: '#C4C4C4',
	},
	promotionalPrice: {
		flexDirection: 'row',
		alignItems: 'baseline',
		gap: 8,
	},
	price: {
		fontSize: 16,
		color: 'white',
	},
	highlightPrice: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.HIGHLIGHT_TEXT_1,
	},
	button: {
		color: '#FFF',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 9999,
		height: 35,
		paddingHorizontal: 80,
		gap: 8,
	},
	buttonText: {
		color: '#FFF',
	},
})