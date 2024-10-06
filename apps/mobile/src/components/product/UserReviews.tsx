
import Colors from '@/src/data/constants/Colors'
import { IProduct } from '@gstore/core'
import { Text, View } from 'react-native'
import StarRating from '../shared/StarRating'

export interface UserReviewsProps {
	product: IProduct
}

export default function UserReviews(props: UserReviewsProps) {
	return (
		<View
			style={{
				padding: 30,
				gap: 10,
			}}
		>
			<View
				style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}
			>
				<Text>⭐</Text>
				<Text
					style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}
				>
					User Reviews
				</Text>
			</View>
			<Text style={{ color: '#ddd', textAlign: 'justify' }}>
				The product is praised for its performance, sound quality, and
				practicality. Customers highlight its good value for money, the
				quality of the built-in microphone, and ease of installation.
				Some mention that the product is ideal for gaming and that
				performance is excellent, even without a dedicated graphics card.
				Others emphasize the sound quality and comfort of the headphones.
			</Text>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					gap: 20,
				}}
			>
				<View style={{ alignItems: 'center' }}>
					<Text
						style={{
							color: Colors.HIGHLIGHT_TEXT_2,
							fontSize: 48,
							fontWeight: 'bold',
						}}
					>
						{props.product.rating.toFixed(1).replace('.', ',')}
					</Text>
					<StarRating rating={props.product.rating} size={18} />
					<Text>(198 Comments)</Text>
				</View>
				<View>
					<Text>Excellent performance.</Text>
					<Text>Great value for money.</Text>
					<Text>Dedicated graphics.</Text>
				</View>
			</View>
		</View>
	)
}