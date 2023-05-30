import { useContext } from "react";
import { CartModalContext } from "@src/contexts/CartModalContext";
import { CartItem } from "@src/components/CartModal/CartItem";
import { EmptyCartMessage } from "@src/components/CartModal/EmptyCartMessage";
import { BsCurrencyDollar } from "react-icons/bs";
import { Button } from "@src/components/Button";
import { SCartView } from "./SCartView.styled";

export default function CartView() {
  const { cartItems, setCartItems } = useContext(CartModalContext);
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <SCartView>
      <div className="item-list-section">
        {cartItems.length === 0 && (
          <div className="empty-cart">
            <EmptyCartMessage />
          </div>
        )}
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} key={cartItem.id} />;
        })}
        {cartItems.length > 0 && (
          <Button onClick={clearCart}>Clear Cart</Button>
        )}
      </div>
      <div className="summary-section">
        <div className="header">Sum</div>
        <div className="content">
          <div>Total price:</div>
          <div className="total-amount">
            <BsCurrencyDollar />
            {cartItems.reduce((total, cartItem) => {
              return total + cartItem.quantity * cartItem.price;
            }, 0)}
          </div>
        </div>
        {cartItems.length > 0 && (
          <div>
            <Button onClick={() => console.log("clicked")}>Buy Now</Button>
          </div>
        )}
      </div>
    </SCartView>
  );
}
