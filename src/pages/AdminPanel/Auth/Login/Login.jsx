import React from "react";
import styles from "../Login.module.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
