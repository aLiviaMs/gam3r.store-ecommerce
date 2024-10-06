import IProduct from './IProduct';

/**
 * A class for filtering products based on a search string.
 */
export default class FilterProducts {
	/**
	 * Filters an array of products based on a search string.
	 * 
	 * @param search - The search string to filter products by.
	 * @param products - The array of products to filter.
	 * @returns An array of products that match the search criteria.
	 */
	execute(search: string, products: IProduct[]): IProduct[] {
    const words = search.toLowerCase().split(' ');
    
		return products.filter((product) => {
			const text = `
				${product.name}
				${product.description}
				${Object.values(product.specifications).join(' ')}
				${product.brand}
			`.toLowerCase()
			return words.every((word) => text.includes(word))
		})
	}
}