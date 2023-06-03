import { Link } from "react-router-dom";
import { SProductPageBreadcrump } from "./SProductPageBreadcrump.styled";

type BreadcrumpProps = {
  product: {
    category: string;
    title: string;
  };
};

export function ProductPageBreadcrump({ product }: BreadcrumpProps) {
  return (
    <SProductPageBreadcrump>
      <nav>
        <ol>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <span className="divider">/</span>
          </li>
          <li>
            <Link to="#" className="link">
              {product.category.toUpperCase().slice(0, 1) +
                product.category.slice(1, product.category.length + 1)}
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
