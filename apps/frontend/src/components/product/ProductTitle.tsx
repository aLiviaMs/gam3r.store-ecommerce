import { IProduct } from '@/src/core';

export interface ProductTitleProps {
	product: IProduct
}

/**
 * ProductTitle Component
 * 
 * This component displays the title and description of a product.
 * 
 * @param props - The properties for the ProductTitle component.
 * @returns A React element representing the product's title and description.
 * 
 * @example
 * ```tsx
 * <ProductTitle product={someProduct} />
 * ```
 */
export default function ProductTitle({ product }: ProductTitleProps) {
  const { name, description } = product;
  
	return (
		<div className="flex flex-col">
			<div className="text-2xl">{name}</div>
			<div className="font-light text-zinc-400">{description}</div>
		</div>
	)
}