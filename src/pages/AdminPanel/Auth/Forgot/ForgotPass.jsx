import React from "react";
import styles from "./Forgot.module.css";
import ForgotForm from "./ForgotForm";

const ForgotPass = () => {
  return (
    <div className={styles.container}>
      <ForgotForm />
    </div>
  );
};

export default ForgotPass;
