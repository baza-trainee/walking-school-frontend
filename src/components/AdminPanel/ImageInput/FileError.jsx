import React from "react";
const FileError = ({ errors, className }) => {
  return (
    <div className={className}>
      <p>{errors}</p>
    </div>
  );
};

export default FileError;
