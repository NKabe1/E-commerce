import { SHomeView } from "./SHomeView.styled";
import { HomeCarousel } from "./HomeCarousel";

export default function HomeView() {
  return (
    <div>
      <SHomeView>
        <HomeCarousel />
      </SHomeView>
    </div>
  );
}
