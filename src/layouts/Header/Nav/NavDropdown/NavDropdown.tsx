import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navCategories } from "../navCategories/navCategories";
import { SNavDropdown } from "./SNavDropdown.styled";

export function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <SNavDropdown
      className={`${isOpen ? "shadow-md shadow-indigo-500/50" : ""}`}
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          data-dropdown-toggle="dropdown"
          onClick={handleToggle}
        >
          Categories
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
                  <Link to={category.to} onClick={() => setIsOpen(!isOpen)}>{category.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SNavDropdown>
  );
}
