import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SectionTitle } from "@src/components/SectionTitle";
import smartphone from "@src/assets/TopCategoriesImgs/category_smartphones.jpg";
import watch from "@src/assets/TopCategoriesImgs/category_watches.jpg";
import motorcycle from "@src/assets/TopCategoriesImgs/category_motorcycles.jpg";
import laptop from "@src/assets/TopCategoriesImgs/category_laptop.jpg";
import {
  SFeaturedCardWrapper,
  SFeaturedCard,
} from "../SFeaturedSection.styled";

export function TopCategories() {
  return (
    <div>
      <SectionTitle>
        <FormattedMessage id="top_categories" />
      </SectionTitle>
      <SFeaturedCardWrapper>
        <Link to={"/categories/smartphones"}>
          <SFeaturedCard image={smartphone}>
            <p>
              <FormattedMessage id="categories.smartphones" />
            </p>
          </SFeaturedCard>
        </Link>
        <Link to={"/categories/laptops"}>
          <SFeaturedCard image={laptop}>
            <p>
              <FormattedMessage id="categories.laptops" />
            </p>
          </SFeaturedCard>
        </Link>
        <Link to={"/categories/womens-watches"}>
          <SFeaturedCard image={watch}>
            <p>
              <FormattedMessage id="categories.womens-watches" />
            </p>
          </SFeaturedCard>
        </Link>
        <Link to={"/categories/motorcycle"}>
          <SFeaturedCard image={motorcycle}>
            <p>
              <FormattedMessage id="categories.motorcycle" />
            </p>
          </SFeaturedCard>
        </Link>
      </SFeaturedCardWrapper>
    </div>
  );
}
