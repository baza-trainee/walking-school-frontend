import React from "react";
import usePagination from "@mui/material/usePagination";
import style from "./Pagination.module.css";
import PaginationControl from "./PaginationControls/PaginationControls";
import PaginationNumber from "./PaginationNumbers/PaginationNumbers";

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
    classes: style.pagination__number
  });

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };
  const mainButtonClass = style.pagination__number
  const selectedClass = style.pagination__number_selected;

  return (
    <div className={style.pagination}>
      <div className={style.pagination__numbers}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            <PaginationNumber
              key={index}
              className={mainButtonClass}
              {...item}
            >
              ...
            </PaginationNumber>;
          } else if (type === "page") {
            return (
              <PaginationNumber
                key={index}
                className={index === currentPage ? `${mainButtonClass} ${selectedClass}` : mainButtonClass}
                {...item}
                classes = {style.pagination__number}
              >
                {page}
              </PaginationNumber>
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
