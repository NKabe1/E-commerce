import { SHomeView } from "./SHomeView.styled";
import { HomeCarousel } from "./HomeCarousel";
import { TopProductsList } from "./TopProductsList";
import { SectionTitle } from "@src/components/SectionTitle";
import { Button } from "@src/components/Button";
import { useNavigate } from "react-router-dom";

export default function HomeView() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div>
      <SHomeView>
        <HomeCarousel />
        <div className="product-title">
          <SectionTitle>Top Products</SectionTitle>
          <Button onClick={handleClick}>All Products</Button>
        </div>
        <TopProductsList/>
      </SHomeView>
    </div>
  );
}
