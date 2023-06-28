import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartModalContext } from "@src/contexts/CartModalContext";
import { CartItem } from "@src/components/CartModal/CartItem";
import { EmptyCartMessage } from "@src/components/CartModal/EmptyCartMessage";
import { BsCurrencyDollar } from "react-icons/bs";
import { Button } from "@src/components/Button";
import { SCartView } from "./SCartView.styled";
import { FormattedMessage } from "react-intl";
import { InfoModal } from "@src/components/InfoModal";
import { AuthContext, TAuthorizationStage } from "@src/contexts/AuthContext";

export default function CartView() {
  const { cartItems, setCartItems } = useContext(CartModalContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { status } = useContext(AuthContext);
  const navigate = useNavigate();

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
        {cartItems.length > 0 && (
          <div className="list-header">
            <p>
              <FormattedMessage id="product" />
            </p>
            <p>
              <FormattedMessage id="price" />
            </p>
            <p>
              <FormattedMessage id="sum" />
            </p>
          </div>
        )}
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} key={cartItem.id} />;
        })}
        {cartItems.length > 0 && (
          <div className="clear-btn">
            <Button onClick={clearCart}>
              <FormattedMessage id="clear_cart" />
            </Button>
          </div>
        )}
      </div>
      <div className="summary-section">
        <div className="header">
          <FormattedMessage id="sum" />
        </div>
        <div className="content">
          <div>
            <FormattedMessage id="total_items"/>
          </div>
          <div>
            {cartItems.reduce((total, cartItem) => {
              return total + cartItem.quantity;
            }, 0)}
          </div>
        </div>
        <div className="content">
          <div>
            <FormattedMessage id="total_price" />
          </div>
          <div className="total-amount">
            <BsCurrencyDollar />
            {cartItems.reduce((total, cartItem) => {
              return total + cartItem.quantity * cartItem.price;
            }, 0)}
          </div>
        </div>
        {cartItems.length > 0 && (
          <div>
            <Button
              onClick={() => {
                if (status === TAuthorizationStage.UNAUTHORIZED) {
                  setShowModal(true);
                } else {
                  navigate("/checkout") ;
                }
              }}
            >
              <FormattedMessage id="buy" />
            </Button>
          </div>
        )}
        <InfoModal showModal={showModal} onClose={() => setShowModal(false)}>
          <FormattedMessage id="please_authorize"/>
        </InfoModal>
      </div>
    </SCartView>
  );
}
