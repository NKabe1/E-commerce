import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SCarouselWrapper, SCarouselArrow } from "./SCarousel.styled";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

function PrevArrow({ style, onClick }: any) {
  return (
    <SCarouselArrow mode="left">
      <div style={{ ...style }} onClick={onClick}>
        <RiArrowLeftSFill />
      </div>
    </SCarouselArrow>
  );
}

function NextArrow({ style, onClick }: any) {
  return (
    <SCarouselArrow mode="right">
      <div style={{ ...style }} onClick={onClick}>
        <RiArrowRightSFill />
      </div>
    </SCarouselArrow>
  );
}

export interface CarouselProps {
  children: React.ReactNode;
  slidesToShow: number;
}

export function Carousel({ children, slidesToShow }: CarouselProps) {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SCarouselWrapper>
      <Slider {...settings}>{children}</Slider>
    </SCarouselWrapper>
  );
}

