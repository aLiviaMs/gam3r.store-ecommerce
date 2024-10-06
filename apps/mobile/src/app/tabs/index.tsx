import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import CartPage from './CartPage'
import HomePage from './HomePage'
import UserPage from './UserPage'

const Tab = createBottomTabNavigator()

export default function Tabs() {
	function tabScreen(name: string, component: any, label: string, icon: string) {
		return (
			<Tab.Screen
				name={name}
				component={component}
				options={{
					unmountOnBlur: true,
					tabBarIcon: ({ focused }) => (
						<View style={styles.tabScreen}>
							<Ionicons
								name={icon as any}
								size={22}
								color={focused ? '#FFF' : '#CCC'}
							/>
							<Text
								style={{
									...styles.tabScreenText,
									color: focused ? '#FFF' : '#CCC',
								}}
							>
								{label}
							</Text>
						</View>
					),
				}}
			/>
		)
	}

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveBackgroundColor: '#7811F5',
				tabBarInactiveBackgroundColor: '#7811F5',
				tabBarStyle: {
					backgroundColor: '#7811F5',
				},
			}}
		>
			{tabScreen('Home', HomePage, 'Home', 'home-outline')}
			{tabScreen('Cart', CartPage, 'Cart', 'cart-outline')}
			{tabScreen('User', UserPage, 'User', 'person-outline')}
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	tabScreen: {
		alignItems: 'center',
	},
	tabScreenText: {
		fontSize: 14,
	},
})