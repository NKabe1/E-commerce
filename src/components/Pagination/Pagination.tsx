import { PaginationLimit } from "./PaginationLimit";
import ReactPaginate from "react-paginate";
import { SPagination } from "./SPagination.styled";

type TPaginationProps = {
  total: number;
  handlePageClick: (event: { selected: number }) => void;
};

export function Pagination(props: TPaginationProps) {
  const { total } = props;
  const pageCount = Math.ceil(total / PaginationLimit);

  return (
    <SPagination>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={props.handlePageClick}
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
      />
    </SPagination>
  );
}
