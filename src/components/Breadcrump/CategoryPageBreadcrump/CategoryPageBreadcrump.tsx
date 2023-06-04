import { Link } from "react-router-dom";
import { SCategoryPageBreadcrump } from "./SCategoryPageBreadcrump.styled";

export function CategoryPageBreadcrump({ category }: { category: string }) {
  return (
    <SCategoryPageBreadcrump>
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
          <li className="category">
            {category.toUpperCase().slice(0, 1) +
              category.slice(1, category.length)}
          </li>
        </ol>
      </nav>
    </SCategoryPageBreadcrump>
  );
}
