import { IProduct } from "../product";

export default interface IItemOrder {
  id: number;
  product: IProduct;
  quantity: number;
  unitPrice: number;
}