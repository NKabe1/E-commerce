import { useContext, useCallback } from "react";
import { useGetProduct } from "./hooks/useGetProduct";
import { CgRemove, CgMathMinus, CgMathPlus } from "react-icons/cg";
import { BsCurrencyDollar } from "react-icons/bs";
import { CartModalContext } from "@src/contexts/CartModalContext/CartModalContext";
import { SCartItemWrapper } from "./SCartItem.styled";

type CartItemProps = {
  cartItem: { id: number; quantity: number };
};

export function CartItem({ cartItem }: CartItemProps) {
  let cartItemId = cartItem.id;
  const { product } = useGetProduct({ cartItemId });
  const { cartItems, setCartItems } = useContext(CartModalContext);

  //remove single item
  const handleRemoveItem = useCallback(() => {
    setCartItems((prev) => {
      const newItems = prev.filter(
        (currentItemId) => currentItemId.id !== cartItem.id
      );
      return newItems;
    });
  }, [cartItem.id]);

  //decrease item quantity
  const handleDecrease = () => {
    let itemIndex = cartItems.findIndex((item) => item.id === cartItem.id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity:
          updatedItems[itemIndex].quantity > 1
            ? updatedItems[itemIndex].quantity - 1
            : updatedItems[itemIndex].quantity,
      };
      setCartItems(updatedItems);
    }
  };

  //increase item quantity
  const handleIncrease = () => {
    let itemIndex = cartItems.findIndex((item) => item.id === cartItem.id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity + 1,
      };
      setCartItems(updatedItems);
    }
  };

  return (
    <SCartItemWrapper>
      <div className="cart-item">
        <div className="part1">
          <CgRemove onClick={handleRemoveItem} className="remove-icon" />
          <img src={product?.thumbnail} className="img" alt="img" />
        </div>
        <div className="part2">
          <div>{product?.title}</div>
          <div className="line2">
            <div className="quantity-section">
              <button onClick={handleDecrease} className="change-quantity">
                <CgMathMinus />
              </button>
              <div className="quantity">{cartItem.quantity}</div>
              <button onClick={handleIncrease} className="change-quantity">
                <CgMathPlus />
              </button>
            </div>
            {product?.price && (
              <div className="price">
                <BsCurrencyDollar />
                {product.price}
              </div>
            )}
            {product?.price && (
              <div className="price">
                <BsCurrencyDollar />
                {product.price * cartItem.quantity}
              </div>
            )}
          </div>
        </div>
      </div>
    </SCartItemWrapper>
  );
}
