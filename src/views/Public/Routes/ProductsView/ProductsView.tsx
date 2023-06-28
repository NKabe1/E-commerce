import { useContext } from "react";
import { ProductsList } from "./ProductsList";
import { SectionTitle } from "@src/components/SectionTitle";
import { useGetTotalNumOfProducts } from "@src/hooks/useGetTotalNumOfProducts";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { SearchBarContext } from "@src/contexts/SearchBarContext";
import { SNotification, SNoProducts } from "./SProductsView.styled";
import { FormattedMessage } from "react-intl";

export default function ProductsView() {
  const { total } = useGetTotalNumOfProducts();
  const { numberOfProducts } = useGetProducts();
  const { searchBarValue } = useContext(SearchBarContext);
  return (
    <div>
      {typeof numberOfProducts === "undefined" || total <= numberOfProducts ? (
        <SectionTitle><FormattedMessage id="all_products"/></SectionTitle>
      ) : numberOfProducts > 0 && total > numberOfProducts ? (
        <div>
          <SectionTitle><FormattedMessage id="search_results"/></SectionTitle>
          <SNotification mode="positive">
            <FormattedMessage id="found"/> {numberOfProducts} <FormattedMessage id="products"/> "{searchBarValue}"
          </SNotification>
        </div>
      ) : (
        <SNoProducts>
          <SectionTitle><FormattedMessage id="no_results"/></SectionTitle>
          <SNotification mode="negative">"{searchBarValue}"</SNotification>
        </SNoProducts>
      )}

      {numberOfProducts !== undefined && numberOfProducts > 0 && (
        <ProductsList />
      )}
    </div>
  );
}
