import { SProductCard } from "./SProductCard.styled";
import { BsCurrencyDollar, BsPercent } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { StarRating } from "../StarRating";
import { Link } from "react-router-dom";
import { Button } from "../Button";

type TProductCardProps = {
  product: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    rating: number;
    discountPercentage: number;
  };
};

export function ProductCard({ product }: TProductCardProps) {
  return (
    <SProductCard>
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} className="img" />
        {/* <Carousel images={{product.images}}/> */}
         <div className="card-title">
          <h5 className="product-info">{product.title}</h5>
          <div className="product-info price">
            <BsCurrencyDollar />
            <h5>{product.price}</h5>
          </div>
        </div>

        {(product?.discountPercentage ?? 0) > 0 &&
          product?.price !== undefined && (
            <div className="discount-info">
              <div className="prev-price">
                <BsCurrencyDollar />
                <div>
                  {Math.round(
                    product.price / (1 - product.discountPercentage / 100)
                  )}
                </div>
              </div>
              <div className="percentage">
                <div>{product.discountPercentage}</div>
                <BsPercent />
                <h5>off</h5>
              </div>
            </div>
          )}

        <div className="rating">
          <StarRating itemRating={product.rating} />
        </div>
      </Link>
      <Link to="#">
        <Button>
          Add to Cart
          <FiShoppingCart />
        </Button>
      </Link>
    </SProductCard>
  );
}
