import { useGetTopProducts } from "@src/hooks/useGetTopProducts";
import { SContainer } from "@src/components/Container";
import { ProductCard } from "@src/components/ProductCard";
import { STopProductsList } from "./STopProductsList.styled";

export function TopProductsList() {
  const { topProducts } = useGetTopProducts();
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
