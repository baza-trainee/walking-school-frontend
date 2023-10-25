import React from "react";
import styles from "./Alert.module.css";
import close from "../../../assets/admin/common/close.svg";

const Success = ({ title, message, closeModal }) => {
  return (
    <div className={styles.wrapper + " " + styles.success}>
      <div
        className={styles.closeBtn}
        onClick={() => closeModal()}
        data-testid="Close"
      >
        <img src={close} alt="close" />
      </div>
      <div className={styles.content}>
        <h5 className={styles.successTitle}>{title}</h5>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};
export default Success;
