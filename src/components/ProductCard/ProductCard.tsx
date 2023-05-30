import { useContext, useState } from "react";
import { SProductCard } from "./SProductCard.styled";
import { BsCurrencyDollar, BsPercent } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { StarRating } from "../StarRating";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { CartModalContext } from "@src/contexts/CartModalContext";
import { SuccessModal } from "../SuccessModal";


type TProductCardProps = {
  product: {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    rating: number;
    discountPercentage: number;
  };
};

export function ProductCard({ product }: TProductCardProps) {
  const { cartItems, setCartItems } = useContext(CartModalContext);
  const [showModal, setShowModal] = useState(false);

  //success message pop up
  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2500);
  };

  const handleAddProduct = () => {
    let itemObject = cartItems.find((item) => {
      return item.id === product.id;
    });
    if (itemObject === undefined) {
      setCartItems((prev) => [
        { id: product.id, quantity: 1, price: product.price },
        ...prev,
      ]);
    } else {
      let itemIndex = cartItems.findIndex((item) => item.id === product.id);
      if (itemIndex !== -1) {
        const updatedItems = [...cartItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
        setCartItems(updatedItems);
      }
    }
  };

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
      <Button
        onClick={() => {
          handleAddProduct();
          handleShowModal();
        }}
      >
        Add to Cart
        <FiShoppingCart />
      </Button>
      <SuccessModal showModal={showModal}>Item added to cart!</SuccessModal>
    </SProductCard>
  );
}
