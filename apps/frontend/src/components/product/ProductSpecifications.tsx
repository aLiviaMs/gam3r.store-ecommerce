import { IProduct } from '@/src/core';
import { IconTag } from '@tabler/icons-react';
import Tag from '../shared/Tag';

export interface ProductSpecificationsProps {
	/** The product object containing specifications to be displayed. */
	product: IProduct
}

/**
 * Specifications Component
 * 
 * This component displays the specifications of a product,
 * including a highlighted feature and a list of other specifications.
 * 
 * @param props - The properties for the Specifications component.
 * @returns A React element representing the product's specifications,
 *          or null if no product is provided.
 * 
 * @example
 * ```tsx
 * <Specifications product={someProduct} />
 * ```
 */
export default function ProductSpecifications({product}: ProductSpecificationsProps) {
  const { specifications } = product;

	return product ? (
		<div className="flex-1 flex flex-col gap-1">
			<div className="flex mb-3">
				<Tag label={specifications.highlight!} icon={IconTag} outlined />
			</div>
			{product?.specifications &&
				Object.keys(specifications)
					.filter((k) => k !== 'highlight')
					.map((key) => (
						<div key={key} className="flex gap-1">
							<span className="p-2 w-1/3 bg-white/5 rounded">{key}</span>
							<span className="p-2 w-2/3 bg-white/5 rounded">
								{specifications[key]}
							</span>
						</div>
					))}
		</div>
	) : null
}