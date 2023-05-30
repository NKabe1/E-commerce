import { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartModalContext } from "@src/contexts/CartModalContext";
import { Button } from "../Button";
import { CartItem } from "./CartItem";
import { EmptyCartMessage } from "./EmptyCartMessage";
import { CgCloseR } from "react-icons/cg";
import { BsCurrencyDollar, BsCartX } from "react-icons/bs";
import { useOnClickOutside } from "@src/hooks/useOnClickOutside";
import { SCartModalWrapper, SModalOverlay } from "./SCartModal.styles";

type cartModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CartModal({ open, onClose }: cartModalProps) {
  const cartModalRef = useRef(null);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartModalContext);
  useOnClickOutside(cartModalRef, onClose);

  //saving in local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      {open ? (
        <div>
          <SCartModalWrapper>
            <div className="cart-modal">
              {/*content*/}
              <div ref={cartModalRef} className="modal-content">
                {/*header*/}
                <div className="header">
                  <h3 className="title">Cart</h3>
                  <button className="button" onClick={onClose}>
                    <span className="icon">
                      <CgCloseR />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="body">
                  <div className="body_content">
                    {cartItems.length === 0 && (
                      <EmptyCartMessage/>
                    )}
                    {cartItems.map((cartItem) => {
                      return <CartItem cartItem={cartItem} key={cartItem.id} />;
                    })}
                  </div>
                </div>
                {/*footer*/}
                {cartItems.length > 0 && (
                  <div className="total-price">
                    <h4>Total price:</h4>
                    <div className="amount">
                      <BsCurrencyDollar />
                      {cartItems.reduce((total, cartItem) => {
                        return total + cartItem.quantity * cartItem.price;
                      }, 0)}
                    </div>
                  </div>
                )}
                <div className="footer-btn">
                  <Button
                    onClick={() => {
                      onClose(), navigate("/cart");
                    }}
                  >
                    Go to Cart
                  </Button>
                </div>
              </div>
            </div>
          </SCartModalWrapper>
          <SModalOverlay></SModalOverlay>
        </div>
      ) : null}
    </>
  );
}
