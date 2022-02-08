import "./style.css"
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector, useDispatch} from "react-redux"
import * as actions from "../../actions/queryActions"
function Paginate({ itemsPerPage }) {
  const dispatch = useDispatch()
  const [pageCount, setPageCount] = useState(0);
  
  const queryState = useSelector(state => state.query)
  const itemOffset = queryState.offset  
  

  useEffect(() => {
    setPageCount(Math.ceil(900 / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % 900;
    dispatch(actions.updateQueryOffset(newOffset))

  };

  return (
    <div className="paginate">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed= {1}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Paginate