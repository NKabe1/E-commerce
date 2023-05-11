import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  SCarouselWrapper,
  SCarouselImage,
  SCarouselArrow,
} from "./SCarousel.styled";

function PrevArrow({ style, onClick }: any) {
  return (
    <SCarouselArrow mode="left">
      <div style={{ ...style }} onClick={onClick}>
        <SlArrowLeft />
      </div>
    </SCarouselArrow>
  );
}

function NextArrow({ style, onClick }: any) {
  return (
    <SCarouselArrow mode="right">
      <div style={{ ...style }} onClick={onClick}>
        <SlArrowRight />
      </div>
    </SCarouselArrow>
  );
}

export type CarouselImageProps = {
  images: { image: string }[];
};

export function Carousel({ images }: CarouselImageProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SCarouselWrapper>
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <SCarouselImage src={image.image} alt="image" />
            </div>
          );
        })}
      </Slider>
    </SCarouselWrapper>
  );
}
