import { Link } from "react-router-dom";
import { SectionTitle } from "@src/components/SectionTitle";
import smartphone from "@src/assets/TopCategoriesImgs/category_smartphones.jpg";
import gaming from "@src/assets/TopCategoriesImgs/category_gaming.jpeg";
import laptop from "@src/assets/TopCategoriesImgs/category_laptop.jpg";
import { SFeaturedCardWrapper, SFeaturedCard } from "../SFeaturedSection.styled";

export function TopCategories() {
  return (
    <div>
        {/* სათარგმნიიიიიიიიიიიიიიიიიიიიი  და ლინკები დასამატებელი*/}
        <SectionTitle>Top Categories სათარგმნი</SectionTitle>
        <SFeaturedCardWrapper>
            <Link to={"/categories/smartphones"}>
                <SFeaturedCard image={smartphone}><p>Smartphones</p></SFeaturedCard>
            </Link>
            <SFeaturedCard image={gaming}><p>Gaming</p></SFeaturedCard>

            {/* ----------------------repeat-------------------- */}

            <Link to={"/categories/laptops"}>
                <SFeaturedCard image={laptop}><p>Laptops</p></SFeaturedCard>
            </Link>
            <SFeaturedCard image={laptop}><p>Laptops</p></SFeaturedCard>
        </SFeaturedCardWrapper>
    </div>
  )
}
