/**
 * The function `roundToCents` rounds a given number to two decimal places.
 * 
 * @param {number} value - The `value` parameter in the `roundToCents` function
 * represents a number that you want to round to two decimal places. The function
 * takes this number, adds a small value (Number.EPSILON) to it to avoid
 * floating-point arithmetic issues, then multiplies it by 100.
 * 
 * @returns a number that has been rounded to two decimal places.
 */
export default function roundToCents(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}