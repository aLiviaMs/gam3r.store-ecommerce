import { Page } from "@/src/components";

interface LayoutProps {
  children: JSX.Element,
};

export default function Layout({children}: LayoutProps) {
  return (
    <Page>
      {children}
    </Page>
  )
}