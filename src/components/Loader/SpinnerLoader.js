import React from "react";
import styles from "./Loader.module.css";

const SpinnerLoader = () => {
  return (
    <div className={styles["lds-spinner"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SpinnerLoader;
