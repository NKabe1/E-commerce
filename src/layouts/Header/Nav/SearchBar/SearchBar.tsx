import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { SSearchBar } from "./SSearchBar.styled";
import { SearchBarContext } from "@src/contexts/SearchBarContext";
import { PaginateContext } from "@src/contexts/PaginateContext";

type TSearchBarProps = {
  className: "low-resolution" | "high-resolution";
};

export function SearchBar({ className }: TSearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { setSearchBarValue } = useContext(SearchBarContext);
  const { setCurrentPage } = useContext(PaginateContext);

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchBarValue(inputValue);
    navigate(`/products?search=${inputValue}`);
    setInputValue("");
    setCurrentPage(0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <SSearchBar className={className}>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Search Product"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        <button type="submit">
          <CgSearch />
        </button>
      </form>
    </SSearchBar>
  );
}
