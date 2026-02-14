import { createMetadata } from "@/lib/metadata";
import {
  SolutionsSection,
  ProductShowcaseSection,
} from "@/components/sections";

export const metadata = createMetadata({
  title: "AI Products for Manufacturing",
  description:
    "Cognaize Systems products: Design Intelligence for engineering drawing review and Manufacturing Intelligence for AI-powered cost estimation and production planning.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main>
      <SolutionsSection />
      <ProductShowcaseSection />
    </main>
  );
}
