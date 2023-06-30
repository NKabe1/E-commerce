import { useState, PropsWithChildren } from "react";
import { PaginateContext } from "@src/contexts/PaginateContext"; 

export function PaginateProvider({ children }: PropsWithChildren) {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <PaginateContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginateContext.Provider>
  );
}
