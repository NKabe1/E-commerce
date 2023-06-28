import { SHomeView } from "./SHomeView.styled";
import { HomeCarousel } from "./HomeCarousel";
import { TopProductsList } from "./TopProductsList";
import { SectionTitle } from "@src/components/SectionTitle";
import { Button } from "@src/components/Button";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { ServicesSection } from "./ServicesSection";
import { TopCategories } from "./TopCategories";
import { FlagmansList } from "./FlagmansList";
import { CookieModal } from "@src/components/CookieModal";

export default function HomeView() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div>
      <SHomeView>
        <HomeCarousel />
        <div className="content-wrapper">
          <TopCategories />
          <div className="product-title">
            <SectionTitle>
              <FormattedMessage id="top_products" />
            </SectionTitle>
            <Button onClick={handleClick}>
              <FormattedMessage id="all_products" />
            </Button>
          </div>
          <TopProductsList />
          <FlagmansList />
          <ServicesSection />
        </div>
      </SHomeView>
      <CookieModal />
    </div>
  );
}
