import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CheckoutHeaderProps {
	step: 'cart' | 'payment'
}

export default function CheckoutHeader(props: CheckoutHeaderProps) {
	function renderItem(
		step: 'cart' | 'payment',
		index: number,
		title: string,
	) {
		return (
			<View style={styles.stepContainer}>
				<View
					style={
						props.step === step
							? styles.activeCircle
							: styles.inactiveCircle
					}
				>
					<Text
						style={
							props.step === step
								? styles.activeCircleText
								: styles.inactiveCircleText
						}
					>
						{index}
					</Text>
				</View>
				<Text
					style={
						props.step === step
							? styles.activeText
							: styles.inactiveText
					}
				>
					{title}
				</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			{renderItem('cart', 1, 'Cart')}
			<View style={styles.separator} />
			{renderItem('payment', 2, 'Payment')}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 20,
		paddingHorizontal: 20,
	},
	stepContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	activeCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: '#FF57A0',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inactiveCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: '#333',
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeCircleText: {
		color: 'white',
		fontSize: 12,
	},
	inactiveCircleText: {
		color: '#000',
		fontSize: 12,
	},
	activeText: {
		color: '#FF57A0',
		marginLeft: 10,
		fontWeight: '400',
	},
	inactiveText: {
		color: '#888',
		marginLeft: 10,
		fontWeight: '400',
	},
	separator: {
		width: 40,
		height: 1,
		backgroundColor: '#888',
		marginHorizontal: 15,
	},
})