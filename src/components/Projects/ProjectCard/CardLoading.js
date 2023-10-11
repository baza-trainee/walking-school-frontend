import React from "react";
import SpinnerLoader from "../../Loader/SpinnerLoader";
import styles from "./Card.module.css";

const CardLoading = () => {
  return (
    <div className={styles.empty}>
      <SpinnerLoader />
      <div className={styles.message}>
        <p className={styles.loading}>Проєкт завантажується</p>
        <p className={styles.wait}>Будь ласка зачекайте.</p>
      </div>
    </div>
  );
};

export default CardLoading;
