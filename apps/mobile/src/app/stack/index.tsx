import { CartProvider } from '@/src/data/contexts/ContextCart'
import { PaymentProvider } from '@/src/data/contexts/ContextPayment'
import { ProductsProvider } from '@/src/data/contexts/ContextProducts'
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from '../tabs'
import Payment from './Payment'
import ProductDetails from './ProductDetails'
import RecentPurchases from './RecentPurchases'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<ProductsProvider>
			<CartProvider>
				<PaymentProvider>
					<NavigationContainer theme={DarkTheme}>
						<Stack.Navigator initialRouteName="Tabs">
							<Stack.Screen
								name="Tabs"
								component={Tabs}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name="ProductDetails"
								component={ProductDetails}
								options={{
									title: 'Product Details',
									headerBackTitle: 'Back',
									headerShown: true,
									headerStyle: { backgroundColor: '#0D001E' },
									headerTintColor: '#FFF',
								}}
							/>
							<Stack.Screen
								name="Payment"
								component={Payment}
								options={{
									title: 'Payment Details',
									headerBackTitle: 'Back',
									headerShown: true,
									headerStyle: { backgroundColor: '#0D001E' },
									headerTintColor: '#FFF',
								}}
							/>
							<Stack.Screen
								name="RecentPurchases"
								component={RecentPurchases}
								options={{
									title: 'Recent Purchases',
									headerBackTitle: 'Back',
									headerShown: true,
									headerStyle: { backgroundColor: '#0D001E' },
									headerTintColor: '#FFF',
								}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</PaymentProvider>
			</CartProvider>
		</ProductsProvider>
	)
}