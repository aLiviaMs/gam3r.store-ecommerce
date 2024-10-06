import Currency from "./classes/Currency";
import roundToCents from "./roundToCents";

/**
 * Represents a generic object type with string keys and values of type T.
 * 
 * @template T The type of the object's values. Defaults to `unknown`.
 */
export type TObject<T = unknown> = {
  [key: string]: T
}
export { Currency, roundToCents };

