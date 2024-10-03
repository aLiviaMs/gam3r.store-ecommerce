'use client'

import useInstallments from '@/src/data/hooks/useInstallments';
import { Currency, IProduct } from '@gstore/core';
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

/**
 * Props for the ProductPurchaseBanner component.
 */
export interface ProductPurchaseBannerProps {
	/** The product object containing pricing details. */
	product: IProduct
}

/**
 * ProductPurchaseBanner Component
 * 
 * This component displays a banner with product pricing information and purchase options.
 * 
 * @param props - The properties for the ProductPurchaseBanner component.
 * @returns A React element representing the purchase banner.
 * 
 * @example
 * ```tsx
 * <ProductPurchaseBanner product={someProduct} />
 * ```
 */
export default function ProductPurchaseBanner({product}: ProductPurchaseBannerProps) {
  const router = useRouter();
  const { promotionalPrice, basePrice } = product;

  // TODO: create useCart hook
	// const { addItem } = useCart()
	const { installmentCount, installmentValue} = useInstallments(promotionalPrice)

	return (
		<div className="flex">
			<div className="flex flex-col border-r border-zinc-500 pr-5">
				<div className="line-through text-zinc-400">from $ {basePrice}</div>
				<div className="text-2xl font-semibold">
					<span className="text-base text-zinc-300">for</span>{' '}
					<span className="text-emerald-500">$ {promotionalPrice}</span>{' '}
					<span className="text-base text-zinc-300">in cash</span>
				</div>
			</div>
			<div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
				<span className="text-base text-zinc-300">{installmentCount}x of</span>
				{Currency.format(installmentValue)}{' '}
			</div>
			<div className="flex gap-2 items-center">
				<button
					className="flex-1 button bg-pink-600"
					onClick={() => {}}
					// onClick={() => addItem(product)}
				>
					<IconShoppingCart size={20} />
					<span>Add Item</span>
				</button>
				<button
					className="flex-1 button bg-violet-700"
					onClick={() => {
						// addItem(product)
						router.push('/checkout/payment')
					}}
				>
					<IconCreditCard size={20} />
					<span>Buy Now</span>
				</button>
			</div>
		</div>
	)
}