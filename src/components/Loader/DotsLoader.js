import React from "react";
import styles from "./Loader.module.css";

const DotsLoader = () => {
  return (
    <div className={styles["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DotsLoader;
