import { SContainer } from "@src/components/Container";
import { ProductCard } from "@src/components/ProductCard";
import { SectionTitle } from "@src/components/SectionTitle";
import { useGetProductsByCategory } from "@src/hooks/useGetProductsByCategory";
import { CategoryPageBreadcrump } from "@src/components/Breadcrump/CategoryPageBreadcrump";
import { MdOutlinePlace } from "react-icons/md";
import { SCategoryView, SCategoryTitle } from "./SCategoryView.styled";
import { FormattedMessage, useIntl } from "react-intl";

export default function CategoryView() {
  const { categoryProducts, category } = useGetProductsByCategory();
  const intl = useIntl();
  const translatedCategory = intl.formatMessage({ id: `categories.${category}` });
  
  return (
    <SCategoryView>
      {category && <CategoryPageBreadcrump category={category} />}
      <SCategoryTitle>
        <SectionTitle>
          {category &&
            translatedCategory?.toUpperCase().slice(0, 1) +
              translatedCategory?.slice(1)}
        </SectionTitle>
        <div className="in-stock">
          <MdOutlinePlace className="in-stock_icon" />
          <p><FormattedMessage id="in_stock"/></p>
        </div>
      </SCategoryTitle>

      <SContainer>
        {categoryProducts.map((product: any) => {
          return (
            <ProductCard key={product.id} product={product} margin={false} />
          );
        })}
      </SContainer>
    </SCategoryView>
  );
}
