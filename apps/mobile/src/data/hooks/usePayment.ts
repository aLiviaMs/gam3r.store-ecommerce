import { useContext } from 'react'
import PaymentContext from '../contexts/ContextPayment'

/**
 * Custom hook to access the Payment context
 * 
 * This hook provides a convenient way to access the payment state and functions
 * from any component within the PaymentContext provider.
 * 
 * @returns The current payment context value
 */
const usePayment = () => useContext(PaymentContext)
export default usePayment