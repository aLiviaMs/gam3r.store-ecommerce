import { useContext } from 'react'
import ContextProducts from '../contexts/ContextProducts'

/**
 * Custom hook to access the Products context
 * 
 * This hook provides a convenient way to access the products
 * from any component within the ContextProducts provider.
 * 
 * @returns The current product context value
 */
const useProducts = () => useContext(ContextProducts)
export default useProducts