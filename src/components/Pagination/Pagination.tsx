import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { PaginationLimit } from "./PaginationLimit";
import ReactPaginate from "react-paginate";
import { SPagination } from "./SPagination.styled";
import { PaginateContext } from "@src/contexts/PaginateContext";

type TPaginationProps = {
  total: number;
  setSkip: Dispatch<SetStateAction<number>>;
};

export function Pagination(props: TPaginationProps) {
  const { total } = props;
  const pageCount = Math.ceil(total / PaginationLimit);
  const { currentPage, setCurrentPage } = useContext(PaginateContext);

  useEffect(() => {
    props.setSkip(currentPage * PaginationLimit);
  }, [currentPage]);

  const handlePageChange = (selected: number) => {
    scrollToTop();
    setCurrentPage(selected);
  };

  // automatically scroll up after changing page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <SPagination>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={({ selected }) => handlePageChange(selected)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        forcePage={currentPage}
      />
    </SPagination>
  );
}