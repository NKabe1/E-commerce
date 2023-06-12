import { Link } from "react-router-dom";
import { SProductPageBreadcrump } from "./SProductPageBreadcrump.styled";
import { FormattedMessage, useIntl } from "react-intl";

type BreadcrumpProps = {
  product: {
    category: string;
    title: string;
  };
};

export function ProductPageBreadcrump({ product }: BreadcrumpProps) {
  const intl = useIntl();
  const translatedCategory = intl.formatMessage({ id: `categories.${product.category}` });
  
  return (
    <SProductPageBreadcrump>
      <nav>
        <ol>
          <li>
            <Link to="/" className="link">
              <FormattedMessage id="home"/>
            </Link>
          </li>
          <li>
            <span className="divider">/</span>
          </li>
          <li>
            <Link to={`/categories/${product.category}`} className="link">
              {translatedCategory.toUpperCase().slice(0, 1) +
                translatedCategory.slice(1)}
            </Link>
          </li>
          <li>
            <span className="divider">/</span>
          </li>
          <li className="current-page">{product.title}</li>
        </ol>
      </nav>
    </SProductPageBreadcrump>
  );
}
