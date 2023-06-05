import { ProductsList } from "../HomeView/ProductsList";
import { SectionTitle } from "@src/components/SectionTitle";

export default function ProductsView() {
  return (
    <div>
      <SectionTitle>All Products</SectionTitle>
      <ProductsList />
    </div>
  );
}
