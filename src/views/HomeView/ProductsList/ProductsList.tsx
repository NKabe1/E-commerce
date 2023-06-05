import { useGetProducts } from "@src/hooks/useGetProducts";
import { SContainer } from "@src/components/Container";
import { ProductCard } from "@src/components/ProductCard";
import { useGetTotalNumOfProducts } from "@src/hooks/useGetTotalNumOfProducts";
import { Pagination } from "@src/components/Pagination";
import { PaginationLimit } from "@src/components/Pagination/PaginationLimit";

export function ProductsList() {
  const { products, skip, setSkip } = useGetProducts();
  const { total } = useGetTotalNumOfProducts();
  const handlePageClick = (event: any) => {
    setSkip(event.selected * PaginationLimit);
  };

  return (
    <div>
      <SContainer>
        {products.map((product: any) => {
          return (
            <ProductCard product={product} key={product.id} margin={false} />
          );
        })}
      </SContainer>
      <Pagination total={total} handlePageClick={handlePageClick} />
    </div>
  );
}
