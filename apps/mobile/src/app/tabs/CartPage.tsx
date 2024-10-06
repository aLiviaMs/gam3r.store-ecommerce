import EmptyCart from '@/src/components/checkout/cart/EmptyCart'
import CheckoutHeader from '@/src/components/checkout/CheckoutHeader'
import Colors from '@/src/data/constants/Colors'
import useCart from '@/src/data/hooks/useCart'
import { Ionicons } from '@expo/vector-icons'
import { ICartItem } from '@gstore/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import CartItemComponent from '../../components/checkout/cart/CartItem'

type RootStackParamList = {
	Cart: undefined;
	Payment: undefined;
	// Add other screen names and their params here
};

type CartScreenProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Cart'>;
};

export default function CartPage({ navigation }: CartScreenProps) {
	const { items, itemCount, addItem, removeItem, removeProduct } = useCart()

	return (
		<SafeAreaView style={styles.container}>
			<CheckoutHeader step="cart" />
			<ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%' }}>
				{items.length === 0 && <EmptyCart />}
				{items.map((item: ICartItem) => (
					<CartItemComponent
						key={item.product.id}
						item={item}
						addItem={() => addItem(item.product)}
						removeItem={() => removeItem(item.product)}
						removeProduct={() => removeProduct(item.product)}
					/>
				))}
			</ScrollView>
			{itemCount > 0 && (
				<Pressable
					style={styles.button}
					onPress={() => {
						navigation.navigate('Payment')
					}}
				>
					<Ionicons name="card-outline" size={22} style={styles.buttonText} />
					<Text style={styles.buttonText}>Continue</Text>
				</Pressable>
			)}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0E001D',
		width: '100%',
	},
	button: {
		color: '#FFF',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.PRIMARY,
		alignSelf: 'center',
		borderRadius: 9999,
		height: 40,
		marginVertical: 20,
		paddingHorizontal: 50,
		gap: 8,
	},
	buttonText: {
		color: '#FFF',
	},
})