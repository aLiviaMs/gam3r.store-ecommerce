import { MAX_INSTALLMENTS_QUANTITY, MONTH_FEE_VALUE } from '../constants';
import { roundToCents } from '../utils';
import IInstallment from './IInstallment';

/**
 * The `CalculateInstallment` provides methods to calculate
 * installment values based on total value, installment count, and fee value,
 * taking into account compound fees. 
 */
export default class CalculateInstallment {
  /**
   * The function `execute` calculates installment values based on the total value,
   * installment count, and fee value provided.
   * 
   * @param  - The `execute` function takes in three parameters: `value`,
   * `installmentCount`, and `feeValue`. The `installmentCount` and `feeValue`
   * parameters have default values assigned if not provided. Here is a brief
   * explanation of each parameter:
   * 
   * @returns The `execute` function is returning an object of type `IInstallment`
   * with the following properties:
   * - `installmentValue`: The calculated installment value after applying fees and
   * dividing by the installment count.
   * - `totalValue`: The total value after applying fees.
   * - `installmentCount`: The number of installments.
   * - `feeValue`: The fee value used in the calculation.
   */
  public execute({
    value,
    installmentCount = MAX_INSTALLMENTS_QUANTITY,
    feeValue = MONTH_FEE_VALUE
  }: {
    value: number;
    installmentCount?: number;
    feeValue?: number;
    }): IInstallment {
    if (installmentCount < 2 || installmentCount > MAX_INSTALLMENTS_QUANTITY) {
      throw new Error(`Installment quantity needs to be between 2 and ${MAX_INSTALLMENTS_QUANTITY}`)
    }

    const totalWithFee = this._calculateCompoundFee({ totalValue: value, feeValue, installmentCount });

    return {
      installmentValue: roundToCents(totalWithFee / installmentCount),
      totalValue: roundToCents(totalWithFee),
      installmentCount,
      feeValue,
    }
  }

  /**
   * The function calculates compound fee based on total value, fee value, and
   * installment count.
   * 
   * @param data - The `_calculateCompoundFee` function takes in an object `data`
   * with three properties.
   * 
   * @returns the total value multiplied by the result of raising 1 plus the fee
   * value to the power of the installment count.
   */
  private _calculateCompoundFee(data: {totalValue: number, feeValue: number, installmentCount: number}): number {
    const { feeValue, installmentCount, totalValue } = data;

    return totalValue * Math.pow(1 + feeValue, installmentCount)
  }
}