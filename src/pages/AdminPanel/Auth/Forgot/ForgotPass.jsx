import React from "react";
import styles from "../Login.module.css";
import ForgotForm from "../../../../components/AdminPanel/Auth/Forgot/ForgotForm";

const ForgotPass = () => {
  return (
    <div className={styles.container}>
      <ForgotForm />
    </div>
  );
};

export default ForgotPass;
