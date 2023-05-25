import { useState, useEffect } from "react";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { Carousel } from "@src/components/Carousel";
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
      <h1
        style={{
          fontSize: "24px",
          backgroundColor: "red",
          padding: "12px 0",
          margin: "12px auto",
        }}
      >
        Product list
      </h1>
      <SContainer>
        {products.map((product: any) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </SContainer>
      <Pagination total={total} handlePageClick={handlePageClick} />
    </div>
  );
}
