import UserProfile from '@/src/components/profile/UserProfile'
import Colors from '@/src/data/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Alert, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native'

type RootStackParamList = {
	User: undefined;
	RecentPurchases: undefined;
	// Add other screen names and their params here
};

type UserScreenProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'User'>;
};

export default function UserPage({ navigation }: UserScreenProps) {
	return (
		<SafeAreaView style={styles.container}>
			<UserProfile name="User" email="test@test.com" phone="9 9999-9999" />
			<Pressable
				style={styles.button}
				onPress={() => {
					navigation.navigate('RecentPurchases')
				}}
			>
				<Ionicons name="cart-outline" size={22} style={styles.buttonText} />
				<Text style={styles.buttonText}>Recent purchases</Text>
			</Pressable>
			<Pressable
				style={styles.logoutButton}
				onPress={() => {
					Alert.alert('Logout', 'Logout successful!', [{ text: 'OK' }])
				}}
			>
				<Ionicons name="log-out-outline" size={22} style={styles.buttonText} />
				<Text style={styles.buttonText}>Logout</Text>
			</Pressable>
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
	logoutButton: {
		color: '#FFF',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ff3030',
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