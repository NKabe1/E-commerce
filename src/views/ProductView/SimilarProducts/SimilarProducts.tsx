import { useState, useEffect } from "react";
import { useGetSimilarProducts } from "./hooks/useGetSimilarProducts";
import { ProductCard } from "@src/components/ProductCard";
import { Carousel } from "@src/components/Carousel";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

type TProductProps = {
  product: { id: number; category: string };
};

export function SimilarProducts({ product }: TProductProps) {
  let category = product.category;
  const { similarProducts } = useGetSimilarProducts({ category });
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

  // excluding the item itself from the category and fetching only 10 items
  const filteredProducts = similarProducts
    .filter((item) => item.id !== product.id)
    .slice(0, 10);

  return (
    <div style={{ margin: "24px 0 36px" }}>
      <Carousel
        slidesToShow={
          isLargeScreen ? 4 : isSmallScreen ? 3 : isTabScreen ? 2 : 1
        }
      >
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} margin={true} />
        ))}
      </Carousel>
    </div>
  );
}
