import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { navCategories } from "../navCategories/navCategories";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SHamburgerMenu } from "./SHamburger.styled";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleStateChange = (state: any) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <SHamburgerMenu>
      <div className="burger-bar">
        <Menu isOpen={isOpen} onStateChange={handleStateChange}>
          <p className="title">
            <b><FormattedMessage id="categories"/></b>
          </p>
          <ul>
            {navCategories.map((category) => {
              return (
                <li key={category.id}>
                  <Link
                    to={category.to}
                    onClick={closeMenu}
                    className="list-item"
                  >
                    {category.title}
                  </Link>
                  <div className="line"></div>
                </li>
              );
            })}
          </ul>
        </Menu>
      </div>
    </SHamburgerMenu>
  );
};
