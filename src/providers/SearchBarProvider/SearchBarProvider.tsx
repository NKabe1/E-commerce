import { useState, PropsWithChildren } from "react";
import { SearchBarContext } from "@src/contexts/SearchBarContext"; 

export function SearchBarProvider({ children }: PropsWithChildren) {
  const [searchBarValue, setSearchBarValue] = useState("");
  return (
    <SearchBarContext.Provider value={{ searchBarValue, setSearchBarValue }}>
      {children}
    </SearchBarContext.Provider>
  );
}
