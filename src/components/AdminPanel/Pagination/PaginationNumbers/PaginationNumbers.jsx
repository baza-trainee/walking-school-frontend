import React from "react";

const PaginationNumber = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default PaginationNumber;
