import { products } from "@/src/core";

interface ProductPageProps {
  params: {
    id: number;
  }
}

export default function ProductPage({ params }: Readonly<ProductPageProps>) {
  const { id } = params;
  const product = products.find((product) => product.id === Number(id))
  
  console.log(product, id)
  return (
    <div>
      <h1>Product: {product?.name}</h1>
    </div>
  )
}