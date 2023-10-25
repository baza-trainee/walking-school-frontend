import React from "react";
import styles from "./ErrorModal.module.css";
import { ReactComponent as Error } from "../../../assets/admin/auth/error.svg";

const ErrorModal = ({ message, className }) => {
  return (
    <div className={`${styles.error} ${className || ""}`}>
      <div>
        <Error />
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorModal;
