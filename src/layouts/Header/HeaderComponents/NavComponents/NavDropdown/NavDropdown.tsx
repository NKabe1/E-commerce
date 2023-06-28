import { useState } from "react";
import { Link } from "react-router-dom";
import { navCategories } from "../navCategories/navCategories";
import { SNavDropdown } from "./SNavDropdown.styled";
import { FormattedMessage } from "react-intl";

export function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleOnClick = () => {
    setIsOpen(false);
  };

  return (
    <SNavDropdown onMouseLeave={handleMouseLeave}>
      <div>
        <button
          type="button"
          data-dropdown-toggle="dropdown"
          onMouseEnter={handleMouseEnter}
        >
          <FormattedMessage id="categories" />
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"}`} id="dropdown">
          <ul aria-labelledby="dropdown">
            {navCategories.map((category: any) => {
              return (
                <li key={category.id}>
                  <Link to={category.to} onClick={handleOnClick}>
                    {category.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SNavDropdown>
  );
}
