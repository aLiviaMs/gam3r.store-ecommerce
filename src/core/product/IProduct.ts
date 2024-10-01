import IProductDetails from "./IProductDetails";
import IProductPrices from "./IProductPrices";

export default interface IProduct extends IProductPrices {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  rating: number;
  videoReview: string;
  tags: string[],
  specifications: IProductDetails
}