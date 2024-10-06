import useProducts from '@/src/data/hooks/useProducts'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import ProductItem from '../../components/product/ProductItem'

export default function HomePage({ navigation }: any) {
	const { products } = useProducts()

	return (
		<SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%' }}>
				{products.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
						onProductSelected={() => {
							navigation.navigate('ProductDetails', { product })
						}}
					/>
				))}
			</ScrollView>
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
})