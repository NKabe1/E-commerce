import { useGetSortedProducts } from "@src/hooks/useGetSortedProducts";
import { SContainer } from "@src/components/Container";
import { ProductCard } from "@src/components/ProductCard";
import { STopProductsList } from "./STopProductsList.styled";

export function TopProductsList() {
  const { topProducts } = useGetSortedProducts();
  return (
    <STopProductsList>
      <SContainer>
        {topProducts.map((product: any) => {
          return (
            <ProductCard product={product} key={product.id} margin={false} />
          );
        })}
      </SContainer>
    </STopProductsList>
  );
}
