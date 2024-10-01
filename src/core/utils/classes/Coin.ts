/**
 * Coin provides a method to format a number as a currency 
 * string based on specified locale and currency.
 */
export default class Coin {
  /**
   * The format function takes a number value and returns it formatted as a currency
   * string based on the specified locale and currency.
   * 
   * @param {number} value - The `value` parameter is a number that you want to
   * format as a currency value.
   * @param {string} [locale=en] - The `locale` parameter in the `format` function is
   * used to specify the language and country format for the currency display. It
   * determines how numbers are formatted, such as the decimal separator, grouping
   * separator, and currency symbol placement. For example, 'en' represents English
   * (United States), 'fr
   * @param {string} [coin=USD] - The `coin` parameter in the `format` function is
   * used to specify the currency code for formatting the number as currency. In the
   * provided code snippet, the default value for `coin` is set to `'USD'`, which
   * means that if the `coin` parameter is not provided when calling it
   * 
   * @returns a formatted string representation of the `value` parameter as 
   * a currency value based on the specified `locale` and `coin` parameters.
   */
  public static format(value: number, locale: string = 'en', coin: string = 'USD'): string {
    return (value ?? 0).toLocaleString(locale, {
      style: 'currency',
      currency: coin
    })
  }
}