import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { SSearchBar, SSearchInput } from "./SSearchBar.styled";

export function SearchBar({
  className,
}: {
  className: "low-resolution" | "high-resolution";
}) {
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const searchHandler = (e: any) => {
    setInputValue(e.target.value);
    setIsInputValid(true);
  };

  const handleSearchClick = () => {
    if (inputValue === "") {
      setIsInputValid(false);
    } else {
      console.log(inputValue);
    }
  };
  return (
    <SSearchBar>
      <SSearchInput
        className={className}
        isInputValid={isInputValid}
        onChange={searchHandler}
        type="text"
        placeholder="Search product"
        value={inputValue}
      />
      <div className={className}>
        <CgSearch onClick={handleSearchClick} />
      </div>
      {isInputValid === false && (
        <p className="warning_text">! Please fill out this field</p>
      )}
    </SSearchBar>
  );
}