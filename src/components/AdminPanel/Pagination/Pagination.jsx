import React from "react";
import usePagination from "@mui/material/usePagination";
import style from "./Pagination.module.css";
import PaginationControl from "./PaginationControls/PaginationControls";

/**
 * Pagination component
 * 
 * @example
 *const pageSize = 20;

  const [page, setPage] = useState(1);

  const handleChange = (newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const displayed = data.slice(startIndex, endIndex).map((element) => (
    <div key={element.id}>
      {element.project_name} {element.creation_date} {element.status}{" "}
      {element.id}
    </div>
  ));

  return (
    <div>
      {displayed}
      <Pagination
        data={data}
        currentPage={page}
        itemCount={pageSize}
        onPageChange={handleChange}
      />
    </div>
  );
 */
const Pagination = ({ data, currentPage, onPageChange, itemCount }) => {
  const totalPages = Math.ceil(data.length / itemCount);

  const { items } = usePagination({
    count: totalPages,
    onChange: (event, newPage) => {
      onPageChange(newPage);
    },
    page: currentPage,
    siblingCount: 1,
  });

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className={style.pagination}>
      <div className={style.pagination__numbers}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                {...item}
              >
                {page}
              </button>
            );
          } else return null;
          return <div key={index}>{children}</div>;
        })}
      </div>

      <div className={style.pagination__controls}>
        <PaginationControl
          left
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <PaginationControl
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default Pagination;
