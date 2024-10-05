import { ProductInformation, ProductNotFound, ProductPriceMeter, ProductTitle } from "@/src/components";
import ProductPurchaseBanner from "@/src/components/product/ProductPurchaseBanner";
import { products } from "@gstore/core";

interface ProductPageProps {
  params: {
    id: number;
  }
}

export default function ProductPage({ params }: Readonly<ProductPageProps>) {
  const { id } = params;
  const product = products.find((product) => product.id === Number(id))
  
  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInformation product={product} />
        <ProductPurchaseBanner product={product} />
        <ProductPriceMeter product={product} />
      </div>
    </div>
  ) : <ProductNotFound />
}