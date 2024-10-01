import { IProduct } from "@/src/core";

export interface ProductItemProps {
  product: IProduct
}

export default function ProductItem({ product }: Readonly<ProductItemProps>) {
  const { name } = product;

  return <div>{ name }</div>
}