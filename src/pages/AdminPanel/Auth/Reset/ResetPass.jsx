import React from "react";
import styles from "../Login.module.css";
import ResetForm from "../../../../components/AdminPanel/Auth/Reset/ResetForm";

const ResetPass = () => {
  return (
    <div className={styles.container}>
      <ResetForm />
    </div>
  );
};

export default ResetPass;
