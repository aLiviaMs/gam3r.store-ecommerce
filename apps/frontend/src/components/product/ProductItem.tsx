'use client'

import { Currency, IProduct } from "@/src/core";
import { IconShoppingCartPlus } from '@tabler/icons-react';
import Image from "next/image";
import Link from "next/link";
import { StarRating } from "../shared";

interface ProductItemProps {
  product: IProduct
}

export default function ProductItem({ product }: Readonly<ProductItemProps>) {
  const { name, id, image, specifications, basePrice, promotionalPrice, rating } = product;
  const { format } = Currency

  return (
    <Link
      href={`/product/${id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="absolute flex justify-end top-2.5 right-2.5">
        <StarRating rating={rating} />
      </div>
      <div className="w-full h-48 relative">
        <Image
          fill
          priority
          src={image}
          className="object-contain"
          alt={`Image of ${name}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{name}</span>
        <div className="self-start text-sm border-b border-dashed">
          {specifications.highlight}
        </div>
        <div className="flex flex-col mt-auto">
          <span className="text-sm text-gray-400 line-through">
            {format(basePrice)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            {format(promotionalPrice)}
          </span>
          <span className="text-zinc-400 text-xs">
            {/* até {format()}x de {' '}
            {format()} */}
          </span>
        </div>
        <button
          className="flex justify-center items-center gap-2 h-8 bg-violet-700 hover:border-2 border-emerald-500 rounded-full"
          onClick={(e) => {
            e.preventDefault()
            // TODO: add item
          }}
        >
          <IconShoppingCartPlus />
          <span>Add Item</span>
        </button>
      </div>
    </Link>
  )
}