import { IProduct } from '@/src/core';
import Image from 'next/image';
import ProductSpecifications from './ProductSpecifications';

export interface ProductInformationProps {
  product: IProduct;
}

/**
 * ProductInformation Component
 * 
 * This component displays detailed information about a product,
 * including an image and specifications.
 * 
 * @param props - The properties for the ProductInformation component.
 * @returns A React element representing the product's image and specifications,
 *          or null if no product is provided.
 * 
 * @example
 * ```tsx
 * <ProductInformation product={someProduct} />
 * ```
 */
export default function ProductInformation({product}: ProductInformationProps) {
	return product ? (
		<div className="flex items-center bg-violet-dark rounded-xl p-5">
			<div className="flex-1 relative flex justify-center h-96">
				<Image
					src={product.image}
					fill
					className="object-cover p-7"
					alt="Product Image"
				/>
			</div>
			<ProductSpecifications product={product} />
		</div>
	) : null
}