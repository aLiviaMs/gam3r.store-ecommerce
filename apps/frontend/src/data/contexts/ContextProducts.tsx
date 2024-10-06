'use client'
import { FilterProducts, IProduct } from '@gstore/core'
import { createContext, useCallback, useEffect, useState } from 'react'
import useAPI from '../hooks/useAPI'

export interface IProductsContextProps {
	products: IProduct[]
	search: string
	setSearch: (search: string) => void
	productById: (id: number) => IProduct | null
}

const ProductsContext = createContext<IProductsContextProps>({} as IProductsContextProps)

export function ProductsProvider(props: {children: JSX.Element}) {
	const { httpGet } = useAPI()
	const [search, setSearch] = useState<string>('')
	const [products, setProducts] = useState<IProduct[]>([])

	const loadProducts = useCallback(async () => {
		const products = await httpGet('/products')
		setProducts(products ?? [])
	}, [httpGet])

	useEffect(() => {
		loadProducts()
	}, [loadProducts])

	return (
		<ProductsContext.Provider
			value={{
				search,
				get products() {
					if (!search) return products
					return new FilterProducts().execute(search, products)
				},
				setSearch,
				productById: (id: number) =>
					products.find((product) => product.id === id) ?? null,
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	)
}

export default ProductsContext