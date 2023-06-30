import { createContext, Dispatch, SetStateAction } from "react";

type SearchBarContextValue = {
  searchBarValue: string;
  setSearchBarValue: Dispatch<SetStateAction<string>>;
};

export const SearchBarContext = createContext<SearchBarContextValue>({
  searchBarValue: "",
  setSearchBarValue: () => {},
});
