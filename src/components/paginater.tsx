import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import "./paginater.css"


function Paginater() {
    // define states
    const [cryptoPerPage] = useState(5);
    const [offset, setOffset] = useState(1);
    const [posts, setAllPosts] = useState([]);
    const [pageCount, setPageCount] = useState(10)

    return (
        <>
          {/* Display all the posts */}
          {posts}
      
          {/* Using React Paginate */}
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            containerClassName={"pagination"}
            activeClassName={"active"} />
        </>
      );
}

export default Paginater;