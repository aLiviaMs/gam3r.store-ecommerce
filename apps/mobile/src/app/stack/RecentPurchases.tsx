import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

type RootStackParamList = {
	RecentPurchases: undefined;
	// Add other screen names and their params here
};

type RecentPurchasesProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'RecentPurchases'>;
};

export default function RecentPurchases({ navigation }: RecentPurchasesProps) {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>Recent Purchases</Text>
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
	text: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
})