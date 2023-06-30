import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import logo from "@src/assets/logo/logo_eshop.png";
import { NavDropdown } from "../../HeaderComponents/NavComponents/NavDropdown";
import { SMainContainer } from "@src/components/MainContainer";
import { SNav, SNavContent } from "./SNavPrivate.styled";
import { Hamburger } from "../../HeaderComponents/NavComponents/Hamburger/Hamburger";
import { SearchBar } from "../../HeaderComponents/NavComponents/SearchBar";
import { CartModal } from "@src/components/CartModal";
import { CartModalContext } from "@src/contexts/CartModalContext/CartModalContext";
import { FormattedMessage } from "react-intl";
import { TUser_Role_Enum } from "@src/types/user.types";
import { CurrentUserContext } from "@src/contexts/CurrentUserContext/CurrentUserContext";

export function NavPrivate() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { cartItems } = useContext(CartModalContext);
  const { currentUser } = useContext(CurrentUserContext);

  let profileLinkPath = "/";
  if (currentUser.user_role === TUser_Role_Enum.USER) {
    profileLinkPath = "/user-page";
  } else if (currentUser.user_role === TUser_Role_Enum.ADMIN) {
    profileLinkPath = "/admin-page";
  }

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
            <Link to={profileLinkPath} className="link_to">
              <div>
                <FiUser />
              </div>
              <h4>
                <FormattedMessage id="profile" />
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
