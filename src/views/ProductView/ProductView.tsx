import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@src/components/Button";
import { CartModalContext } from "@src/contexts/CartModalContext";
import { SuccessModal } from "@src/components/SuccessModal";
import { StarRating } from "@src/components/StarRating";
import { BsCurrencyDollar, BsPercent } from "react-icons/bs";
import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { MdOutlinePlace, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import {
  SProductView, 
  SSelectedImage,
  SSimilarProducts,
} from "./SProductView.styled";
import { SectionTitle } from "@src/components/SectionTitle";
import { SimilarProducts } from "./SimilarProducts";
import { ProductPageBreadcrump } from "@src/components/Breadcrump/ProductPageBreadcrupm";
import { FormattedMessage } from "react-intl";

type TProduct = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  images?: string[];
  description: string;
  discountPercentage: number;
  category: string;
  stock: number;
};

export default function ProductView() {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<TProduct>();
  const [selectedImage, setSelectedImage] = useState<string>();
  const [chosenQuantity, setChosenQuantity] = useState<number>(1);
  const { cartItems, setCartItems } = useContext(CartModalContext);
  const [showModal, setShowModal] = useState(false);

  const getSingleProduct = async (product_id: string | undefined) => {
    const resp = await axios.get(
      `https://dummyjson.com/products/${product_id}`
    );
    setProduct(resp.data);
    setSelectedImage(resp.data.thumbnail);
  };

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  const handleAddProduct = () => {
    let itemObject = cartItems.find((item) => {
      return item.id === product?.id;
    });
    if (itemObject === undefined) {
      setCartItems((prev) => [
        {
          id: (product as TProduct).id,
          quantity: chosenQuantity,
          price: (product as TProduct).price,
        },
        ...prev,
      ]);
    } else {
      let itemIndex = cartItems.findIndex(
        (item) => item.id === (product as TProduct).id
      );
      if (itemIndex !== -1) {
        const updatedItems = [...cartItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + chosenQuantity,
        };
        setCartItems(updatedItems);
      }
    }
  };

  //decrease quantity
  const handleDecrease = () => {
    chosenQuantity > 1 && setChosenQuantity(chosenQuantity - 1);
  };

  //increase quantity
  const handleIncrease = () => setChosenQuantity(chosenQuantity + 1);

  //success message pop up
  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2500);
  };

  //move to cart view with a delay
  const handleMoveToLink = () => {
    setTimeout(() => {
      window.location.href = "/cart";
    }, 2000);
  };

  return (
    <>
      {product && <ProductPageBreadcrump product={product} />}

      <SProductView>
        <div className="image-section">
          <img src={selectedImage} alt="img" className="main-img" />
          <div className="horizontal-imgs">
            {product?.images?.map((image: string, index: number) => {
              return (
                <SSelectedImage
                  key={index}
                  src={image}
                  alt="img"
                  isSelected={selectedImage === image}
                  onClick={() => {
                    setSelectedImage(image);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="product-desc-section">
          <div className="title">{product?.title}</div>
          <div className="description">{product?.description}</div>
          <StarRating itemRating={product?.rating} />
          <div className="price">
            <BsCurrencyDollar />
            <div>{product?.price}</div>
          </div>

          {(product?.discountPercentage ?? 0) > 0 &&
            product?.price !== undefined && (
              <div className="discount-section">
                <div className="old-price">
                  <BsCurrencyDollar />
                  <div>
                    {Math.round(
                      product.price / (1 - product.discountPercentage / 100)
                    )}
                  </div>
                </div>
                <div className="discount-percentage">
                  <div>{product.discountPercentage}</div>
                  <BsPercent />
                  <div className="off-text">off</div>
                </div>
              </div>
            )}

          <div className="quantity-info">
            <div className="quantity-control">
              <button onClick={handleDecrease} className="quantity-modify">
                <CgMathMinus />
              </button>
              <div className="quantity">{chosenQuantity}</div>
              <button onClick={handleIncrease} className="quantity-modify">
                <CgMathPlus />
              </button>
            </div>

            {product?.stock !== undefined && product.stock < 12 ? (
              <div className="stock-shortage">
                <p><FormattedMessage id="only"/></p>
                <p className="left-quantity">{product.stock} <FormattedMessage id="items"/></p>
                <p><FormattedMessage id="left"/></p>
              </div>
            ) : (
              <div className="in-stock">
                <MdOutlinePlace className="in-stock_icon" />
                <p><FormattedMessage id="in_stock"/></p>
              </div>
            )}
          </div>

          <div className="btns-wrapper">
            <Button
              onClick={() => {
                handleAddProduct();
                handleShowModal();
              }}
            >
              <FormattedMessage id="add_to_cart"/>
              <FiShoppingCart />
            </Button>

            <Button
              onClick={() => {
                handleAddProduct();
                handleShowModal();
                handleMoveToLink();
              }}
            >
              <FormattedMessage id="buy"/>
            </Button>
          </div>
          <div className="line"></div>
          <div className="ps">
            <FiTruck className="ps_icon" />
            <FormattedMessage id="free_delivery"/>
          </div>
          <div className="ps">
            <MdOutlineEnergySavingsLeaf className="ps_icon" />
            <FormattedMessage id="warranty"/>
          </div>
        </div>
        <SuccessModal showModal={showModal}><FormattedMessage id="added_to_cart"/></SuccessModal>
      </SProductView>

      <SSimilarProducts>
        <SectionTitle><FormattedMessage id="similar_products"/></SectionTitle>
        {product && <SimilarProducts product={product} />}
      </SSimilarProducts>
    </>
  );
}
