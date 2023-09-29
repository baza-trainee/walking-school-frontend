import React from "react";
import styles from "./Alert.module.css";
import AdminButton from "../UI/Button/AdminButton";

const Question = ({ title, message, closeModal }) => {
  return (
    <div className={styles.wrapper + " " + styles.question}>
      <div className={styles.content}>
        <h5 className={styles.titleQuestion}>{title}</h5>
        <p>{message}</p>

        <div className={styles.buttonsWrapper}>
          <AdminButton variant="primary" onClick={() => closeModal()}>
            Скасувати
          </AdminButton>
          <AdminButton variant="secondary" onClick={() => closeModal()}>
            Підтвердити
          </AdminButton>
        </div>
      </div>
    </div>
  );
};
export default Question;
