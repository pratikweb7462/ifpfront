import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import "@/components/core/pagination/pagination.scss"

export default function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleClick = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handleClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="flex-wrap justify-content-center justify-content-md-end">
      <Pagination.Prev
        onClick={() => handleClick(currentPage - 1)}
        className="PrevBtn"
      >
        Prev
      </Pagination.Prev>

      {items}

      <Pagination.Next
        onClick={() => handleClick(currentPage + 1)}
        className="NextBtn"
      >
        Next
      </Pagination.Next>
    </Pagination>
  );
}
