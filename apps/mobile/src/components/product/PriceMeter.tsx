import Colors from '@/src/data/constants/Colors'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import { IProduct } from '@gstore/core'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'

export interface PriceMeterProps {
	product: IProduct
}

export default function PriceMeter(props: PriceMeterProps) {
	const {
		lowestPrice: minimum,
		highestPrice: maximum,
		promotionalPrice: current,
		averagePrice: average,
	} = props.product

	let percentage
	if (current > average) {
		percentage = ((current - average) / (maximum - average)) * 50 + 50
	} else {
		percentage = (1 - (average - current) / (average - minimum)) * 50
	}

	return (
		<View style={styles.container}>
			<View style={styles.priceStatus}>
				{percentage >= 40 && percentage < 60 ? (
					<Fontisto
						name="confused"
						size={40}
						style={{ color: '#eab308' }}
					/>
				) : percentage >= 60 ? (
					<Fontisto
						name="mad"
						size={40}
						style={{ color: '#ef4444' }}
					/>
				) : (
					<Fontisto
						name="smiley"
						size={40}
						style={{ color: '#22c55e' }}
					/>
				)}
				<View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ color: 'white' }}>
							The product price is{' '}
						</Text>
						<Text
							style={{
								color: Colors.HIGHLIGHT_TEXT_1,
								fontWeight: 'bold',
							}}
						>
							{percentage >= 40 && percentage < 60
								? 'average'
								: percentage >= 60
								? 'above average'
								: 'below average'}
						</Text>
					</View>
					<Text style={{ color: 'white' }}>
						Based on the price of the last 30 days.
					</Text>
				</View>
			</View>
			<View style={{ position: 'relative' }}>
				<LinearGradient
					colors={['#22c55e', '#facc15', '#ef4444']}
					start={{ x: 0, y: 0.75 }}
					end={{ x: 1, y: 0.25 }}
					style={styles.priceBar}
				></LinearGradient>
				<View
					style={{ ...styles.pricePosition, left: `${percentage}%` }}
				>
					<Ionicons
						name="chevron-down"
						size={20}
						style={{ color: Colors.HIGHLIGHT_TEXT_1 }}
					/>
					<View style={styles.priceCircleOuter}>
						<View style={styles.priceCircleInner} />
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 20,
		paddingVertical: 20,
		paddingHorizontal: 30,
	},
	priceStatus: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	priceBar: {
		position: 'relative',
		height: 7,
		borderRadius: 9999,
	},
	pricePosition: {
		position: 'absolute',
		alignItems: 'center',
		top: -25,
	},
	priceCircleOuter: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		height: 18,
		width: 18,
		borderRadius: 9999,
	},
	priceCircleInner: {
		backgroundColor: Colors.HIGHLIGHT_TEXT_1,
		height: 13,
		width: 13,
		borderRadius: 9999,
	},
})