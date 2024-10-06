import { IProduct } from '@gstore/core';

/**
 * Props interface for the ExpertReview component.
 */
export interface ExpertReviewProps {
	/** The product object containing review information. */
	product: IProduct
}

/**
 * ExpertReview component displays a specialized review for a given product.
 * It includes a disclaimer about the review source and an embedded video review.
 *
 * @param props - The component props.
 * @returns A React component that renders the expert review section.
 */
export default function ExpertReview({product}: ExpertReviewProps) {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-2">
					<span className="text-3xl">🎯</span>
					<span className="text-2xl font-semibold">
						Expert Review
					</span>
				</div>
				<p className="font-light text-zinc-300">
					*The reviews we present are not developed by us, but by specialized 
					technology channels that provide an in-depth and impartial analysis of the products.
				</p>
			</div>
			<div className="relative lg:h-[500px]">
				<iframe
					className="absolute inset-0 w-full h-full"
					src={product?.videoReview}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	)
}