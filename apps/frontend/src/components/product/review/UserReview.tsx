import { IProduct } from '@gstore/core'
import StarRating from '../../shared/StarRating'

/**
 * Props interface for the UserReviews component.
 */
export interface UserReviewProps {
	product: IProduct
}

/**
 * UserReviews component displays user reviews and ratings for a given product.
 * It shows an overall summary, rating, and key points from user feedback.
 *
 * @param props - The component props.
 * @returns A React component that renders the user reviews section.
 */
export default function UserReview({ product }: Readonly<UserReviewProps>) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<span className="text-2xl">⭐</span>
				<span className="text-2xl font-semibold">
					User Reviews
				</span>
			</div>
			<p className="font-light text-zinc-300">
				The product is praised for its performance, sound quality, and practicality. 
				Customers highlight its good value for money, the quality of the built-in microphone, 
				and ease of installation. Some mention that the product is ideal for gaming and 
				that performance is excellent, even without a dedicated graphics card. 
				Others emphasize the sound quality and comfort of the headphones.
			</p>
			<div className="flex items-center gap-5 mt-5">
				<div className="flex flex-col gap-2 items-center">
					<div className="text-7xl text-pink-600">
						{product.rating}
					</div>
					<StarRating rating={product.rating} size={18} />
					<div className="font-light text-sm text-zinc-300">
						(198 Comments)
					</div>
				</div>
				<div className="flex-1 flex items-center bg-violet-dark/50 h-32 rounded-xl">
					<ul className="flex flex-col list-disc px-10 gap-1">
						<li>Excellent performance.</li>
						<li>Great value for money.</li>
						<li>Dedicated graphics.</li>
					</ul>
				</div>
			</div>
		</div>
	)
}