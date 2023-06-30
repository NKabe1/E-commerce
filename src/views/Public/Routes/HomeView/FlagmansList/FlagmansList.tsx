import { useState, useEffect } from "react";
import { useGetSortedProducts } from "@src/hooks/useGetSortedProducts";
import { ProductCard } from "@src/components/ProductCard";
import { SectionTitle } from "@src/components/SectionTitle";
import { Carousel } from "@src/components/Carousel";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";
import { SFlagmansList } from "./SFlagmansList.styled";
import { FormattedMessage } from "react-intl";

export function FlagmansList() {
  const { expensiveProducts } = useGetSortedProducts();
  const [isTabScreen, setIsTabScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabScreen(
        window.matchMedia(`(min-width: ${responsive_sizes.tablet})`).matches
      );
      setIsSmallScreen(
        window.matchMedia(`(min-width: ${responsive_sizes.desktop_small})`)
          .matches
      );
      setIsLargeScreen(
        window.matchMedia(
          `(min-width: ${responsive_sizes.desktop_extra_large})`
        ).matches
      );
    };
    // add event listener to update the variables on window resize
    window.addEventListener("resize", handleResize);
    // initial check for screen size on component mount
    handleResize();
    // cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SFlagmansList>
      <SectionTitle><FormattedMessage id="flagmans"/></SectionTitle>
      <div className="slider">
        <Carousel
          slidesToShow={
            isLargeScreen ? 4 : isSmallScreen ? 3 : isTabScreen ? 2 : 1
          }
        >
          {expensiveProducts.map((product, index) => (
            <ProductCard key={index} product={product} margin={true} />
          ))}
        </Carousel>
      </div>
    </SFlagmansList>
  );
}
