import { useContext } from "react";
import { ProductsList } from "./ProductsList";
import { SectionTitle } from "@src/components/SectionTitle";
import { useGetTotalNumOfProducts } from "@src/hooks/useGetTotalNumOfProducts";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { SearchBarContext } from "@src/contexts/SearchBarContext";
import { SNotification, SNoProducts } from "./SProductsView.styled";

export default function ProductsView() {
  const { total } = useGetTotalNumOfProducts();
  const { numberOfProducts } = useGetProducts();
  const { searchBarValue } = useContext(SearchBarContext);
  return (
    <div>
      {typeof numberOfProducts === "undefined" || total <= numberOfProducts ? (
        <SectionTitle>All Products</SectionTitle>
      ) : numberOfProducts > 0 && total > numberOfProducts ? (
        <div>
          <SectionTitle>Search results:</SectionTitle>
          <SNotification mode="positive">
            Found {numberOfProducts} products for "{searchBarValue}"
          </SNotification>
        </div>
      ) : (
        <SNoProducts>
          <SectionTitle>No products found</SectionTitle>
          <SNotification mode="negative">"{searchBarValue}"</SNotification>
        </SNoProducts>
      )}

      {numberOfProducts !== undefined && numberOfProducts > 0 && (
        <ProductsList />
      )}
    </div>
  );
}
