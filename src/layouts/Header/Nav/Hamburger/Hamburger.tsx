import { slide as Menu } from "react-burger-menu";
import { navCategories } from "../navCategories/navCategories";
import { Link } from "react-router-dom";

import { SHamburgerMenu } from "./SHamburger.styled";

export const Hamburger = () => {
  const showSettings = (event: any) => {
    event.preventDefault();
    // ...
  };

  return (
    <SHamburgerMenu>
      <div className="burger-bar">
        <Menu>
          <p className="title">
            <b>Categories</b>
          </p>
          <ul>
            {navCategories.map((category) => {
              return (
                <li key={category.id}>
                  <Link to={category.to} className="list-item">
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
