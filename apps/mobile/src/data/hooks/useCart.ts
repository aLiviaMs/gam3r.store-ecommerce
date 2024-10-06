import { useContext } from 'react'
import CartContext from '../contexts/ContextCart'

/**
 * Custom hook to access the Cart context
 * 
 * This hook provides an easy way to access the cart state and functions
 * from any component within the CartContext provider.
 * 
 * @returns The current cart context value
 */
const useCart = () => useContext(CartContext)
export default useCart