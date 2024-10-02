import { CalculateInstallment } from '@/src/core'

/**
 * useInstallments Hook
 * 
 * This custom hook calculates the installment details for a given value and number of installments.
 * 
 * @param value - The total value to be divided into installments.
 * @param numberOfInstallments - The number of installments (default is 12).
 * @returns An object containing the installment details.
 * 
 * @example
 * ```tsx
 * const installments = useInstallments(1000, 6);
 * console.log(installments);
 * ```
 */
export default function useInstallments(value: number, installmentCount: number = 12) {
	const installments = new CalculateInstallment().execute({
    value,
    installmentCount
  })
  
	return installments
}