import { Link } from "react-router-dom";
import { SCategoryPageBreadcrump } from "./SCategoryPageBreadcrump.styled";
import { FormattedMessage, useIntl } from "react-intl";

export function CategoryPageBreadcrump({ category }: { category: string }) {
  const intl = useIntl();
  const translatedCategory = intl.formatMessage({ id: `categories.${category}` });
  
  return (
    <SCategoryPageBreadcrump>
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
          <li className="category">
          {translatedCategory.toUpperCase().slice(0, 1) +
              translatedCategory.slice(1)}
          </li>
        </ol>
      </nav>
    </SCategoryPageBreadcrump>
  );
}
