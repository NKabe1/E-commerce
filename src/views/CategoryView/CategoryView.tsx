import { SContainer } from "@src/components/Container";
import { ProductCard } from "@src/components/ProductCard";
import { SectionTitle } from "@src/components/SectionTitle";
import { useGetProductsByCategory } from "@src/hooks/useGetProductsByCategory";
import { CategoryPageBreadcrump } from "@src/components/Breadcrump/CategoryPageBreadcrump";
import { MdOutlinePlace } from "react-icons/md";
import { SCategoryTitle } from "./SCategoryView.styled";

export default function CategoryView() {
  const { categoryProducts, category } = useGetProductsByCategory();
  return (
    <div>
      {category && <CategoryPageBreadcrump category={category} />}
      <SCategoryTitle>
        <SectionTitle>
          {category &&
            category?.toUpperCase().slice(0, 1) +
              category?.slice(1, category.length)}
        </SectionTitle>
        <div className="in-stock">
          <MdOutlinePlace className="in-stock_icon" />
          <p>In Stock</p>
        </div>
      </SCategoryTitle>

      <SContainer>
        {categoryProducts.map((product: any) => {
          return (
            <ProductCard key={product.id} product={product} margin={false} />
          );
        })}
      </SContainer>
    </div>
  );
}
