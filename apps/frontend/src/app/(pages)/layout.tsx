import { Page } from "@/src/components";
import { CartProvider } from "@/src/data/contexts/ContextCart";
import { PaymentProvider } from "@/src/data/contexts/ContextPayment";
import { ProductsProvider } from "@/src/data/contexts/ContextProducts";

interface LayoutProps {
  children: JSX.Element,
};

export default function Layout({children}: LayoutProps) {
  return (
    <ProductsProvider>
      <CartProvider>
        <PaymentProvider>
          <Page>{children}</Page>
        </PaymentProvider>
      </CartProvider>
    </ProductsProvider>
  )
}