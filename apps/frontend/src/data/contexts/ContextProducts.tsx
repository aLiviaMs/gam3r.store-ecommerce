'use client'
import { FilterProducts, IProduct } from '@gstore/core'
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import useAPI from '../hooks/useAPI'

export interface IProductsContextProps {
	products: IProduct[]
	search: string
	setSearch: (search: string) => void
	productById: (id: number) => IProduct | null
}

const ProductsContext = createContext<IProductsContextProps>({} as IProductsContextProps)

interface ProductsProviderProps {
	children: ReactNode
}

export function ProductsProvider({ children }: ProductsProviderProps) {
	const { httpGet } = useAPI()
	const [search, setSearch] = useState<string>('')
	const [products, setProducts] = useState<IProduct[]>([])

	const loadProducts = useCallback(async () => {
		try {
			const fetchedProducts = await httpGet('/products')
      setProducts(fetchedProducts ?? [])
      console.log('hi')
		} catch (error) {
			console.error('Error loading products:', error)
			setProducts([])
		}
	}, [httpGet])

	useEffect(() => {
		loadProducts()
	}, [loadProducts])

	const filteredProducts = useCallback(() => {
		if (!search) return products
		return new FilterProducts().execute(search, products)
	}, [search, products])

	const productById = useCallback((id: number) => 
		products.find((product) => product.id === id) ?? null
	, [products])

	return (
		<ProductsContext.Provider
			value={{
				search,
				products: filteredProducts(),
				setSearch,
				productById,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsContext