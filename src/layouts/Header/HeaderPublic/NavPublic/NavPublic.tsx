import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import logo from "@src/assets/logo/logo_eshop.png";
import { NavDropdown } from "../../HeaderComponents/NavComponents/NavDropdown";
import { SMainContainer } from "@src/components/MainContainer";
import { SNav, SNavContent } from "./SNavPublic.styled";
import { Hamburger } from "../../HeaderComponents/NavComponents/Hamburger/Hamburger";
import { SearchBar } from "../../HeaderComponents/NavComponents/SearchBar";
import { CartModal } from "@src/components/CartModal";
import { CartModalContext } from "@src/contexts/CartModalContext/CartModalContext";
import { FormattedMessage } from "react-intl";

export function NavPublic() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { cartItems } = useContext(CartModalContext);
  return (
    <SNav>
      <SMainContainer>
        <SNavContent>
          <div className="menu-logo">
            <Hamburger />
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <NavDropdown />
          <SearchBar className="high-resolution" />
          <CartModal open={showModal} onClose={() => setShowModal(false)} />
          <div className="link_pair">
            <Link to="/auth-login" className="link_to">
              <div>
                <FiUser />
              </div>
              <h4>
                <FormattedMessage id="authorization" />
              </h4>
            </Link>
            <div className="link_to" onClick={() => setShowModal(true)}>
              <div className="cart-logo">
                <FiShoppingCart />
                {cartItems.length > 0 && (
                  <div className="quantity">
                    {cartItems.reduce((total, cartItem) => {
                      return total + cartItem.quantity;
                    }, 0)}
                  </div>
                )}
              </div>
              <h4>
                <FormattedMessage id="cart" />
              </h4>
            </div>
          </div>
        </SNavContent>
        <SearchBar className="low-resolution" />
      </SMainContainer>
    </SNav>
  );
}
