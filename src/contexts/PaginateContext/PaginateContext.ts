import { createContext, Dispatch, SetStateAction } from "react";

type TPaginateProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const PaginateContext = createContext<TPaginateProps>({
  currentPage: 0,
  setCurrentPage: () => {},
});
