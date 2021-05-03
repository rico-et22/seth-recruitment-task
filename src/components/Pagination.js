import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const pageCount = useSelector((state) => state.comments.pages);
  const currentPage = useSelector((state) => state.comments.currentPage);
  const dispatch = useDispatch();
  const changePage = (data) =>
    dispatch({ type: "comments/pageChanged", payload: data.selected });

  return (
    <ReactPaginate
      previousLabel={"wstecz"}
      nextLabel={"dalej"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={(data) => {
        changePage(data);
      }}
      containerClassName={"pagination"}
      activeClassName={"active"}
      forcePage={currentPage}
    />
  );
};

export default Pagination;
