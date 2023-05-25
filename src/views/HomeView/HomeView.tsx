import { SHomeView } from "./SHomeView.styled";
import { HomeCarousel } from "./HomeCarousel";
import { ProductsList } from "./ProductsList";

export default function HomeView() {
  return (
    <div>
      <SHomeView>
        <HomeCarousel />
        <ProductsList/>
      </SHomeView>
    </div>
  );
}
