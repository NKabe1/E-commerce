import { useGetProducts } from "@src/hooks/useGetProducts";
import { SContainer } from "@src/components/Container";
import { ProductCard } from "@src/components/ProductCard";
import { Pagination } from "@src/components/Pagination";

export function ProductsList() {
  const { products, setSkip, numberOfProducts } = useGetProducts();

  return (
    <div>
      <SContainer>
        {products.map((product: any) => {
          return (
            <ProductCard product={product} key={product.id} margin={false} />
          );
        })}
      </SContainer>
      {numberOfProducts && (
        <Pagination total={numberOfProducts} setSkip={setSkip} />
      )}
    </div>
  );
}
