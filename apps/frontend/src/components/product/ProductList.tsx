'use client'

import { products } from '@gstore/core'
import ProductItem from './ProductItem'
import ProductNotFound from './ProductNotFound'

/**
 * ProductList Component
 * 
 * This component renders a grid of product items or a "Product Not Found" message
 * depending on the availability of products.
 * 
 * @remarks
 * This is a client-side component, as indicated by the 'use client' directive.
 * It currently uses a static import of products from '@/core', but there's a
 * commented-out import for a custom hook 'useProducts' which could be used for
 * dynamic data fetching in the future.
 * 
 * @returns A React element representing either a grid of products or a "Product Not Found" message.
 * 
 * @example
 * ```tsx
 * <ProductList />
 * ```
 */
export default function ProductList() {
  // TODO: Create hook to useProducts

  return products.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
      <ProductItem product={product} key={product.id} />
    ))}
    </div>
  ) : (
    <ProductNotFound withoutBackButton />
  )
}