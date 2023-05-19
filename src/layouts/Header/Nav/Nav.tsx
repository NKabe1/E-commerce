import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import logo from "@src/assets/logo/logo-eshop.png";
import { NavDropdown } from "./NavDropdown";
import { SMainContainer } from "@src/components/MainContainer";
import { SNav, SNavContent } from "./SNav.styled";
import { Hamburger } from "./Hamburger/Hamburger";
import { SearchBar } from "./SearchBar";

export function Nav() {
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
          <div className="link_pair">
            <Link to="/auth-login" className="link_to">
              <div>
                <FiUser />
              </div>
              <h4>Authorization</h4>
            </Link>
            <Link to="#" className="link_to">
              <div>
                <FiShoppingCart />
              </div>
              <h4>Cart</h4>
            </Link>
          </div>
        </SNavContent>
        <SearchBar className="low-resolution" />
      </SMainContainer>
    </SNav>
  );
}
