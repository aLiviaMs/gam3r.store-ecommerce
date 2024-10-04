import { EnumOrderStatus } from './EnumOrderStatus';
import { EnumPurchaseType } from './EnumPurchaseType';
import IAddressOrder from './IAddressOrder';
import IItemOrder from './IItemOrder';

export default interface IOrder {
  id: number;
  date: Date;
  items: IItemOrder[];
  totalValue: number;
  status: EnumOrderStatus;
  paymentMethod: EnumPurchaseType;
  delivery: IAddressOrder;
}
