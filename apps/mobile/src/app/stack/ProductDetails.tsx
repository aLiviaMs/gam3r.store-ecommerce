import PriceMeter from '@/src/components/product/PriceMeter';
import UserReviews from '@/src/components/product/UserReviews';
import Colors from '@/src/data/constants/Colors';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import PurchaseBanner from '../../components/product/PurchaseBanner';
import Specifications from '../../components/product/Specifications';

export default function ProductDetails({ route }: any) {
	const { product } = route.params
	if (!product) return null

	return (
		<ScrollView style={styles.container}>
			<View style={styles.productInfo}>
				<Text style={styles.title}>{product.name}</Text>
				<View style={styles.imageBackground}>
					<Image source={{ uri: product.image }} style={styles.image} />
				</View>
				<Specifications product={product} />
			</View>
			<PurchaseBanner product={product} />
			<PriceMeter product={product} />
			<UserReviews product={product} />
			<View style={{ height: 50 }} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		gap: 10,
		backgroundColor: Colors.BG_PRIMARY,
	},
	productInfo: {
		backgroundColor: Colors.BG_SECONDARY,
		padding: 20,
		gap: 20,
	},
	title: {
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 5,
	},
	imageBackground: {
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		borderRadius: 10,
		padding: 20,
		height: 230,
	},
	image: {
		width: '80%',
		height: '100%',
		borderRadius: 10,
	},
})