import { CarouselImages } from "./CarouselImages";
import { Carousel } from "@src/components/Carousel";
import { SHomeCarousel } from "./SHomeCarousel.styled";

export function HomeCarousel() {
  return (
    <div>
      <Carousel slidesToShow={1}>
        {CarouselImages.map((image, index) => {
          return (
            <div key={index}>
              <SHomeCarousel src={image} alt="img" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
