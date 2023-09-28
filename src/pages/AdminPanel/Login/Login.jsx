import React from "react";
import styles from "./Login.module.css";
import LoginFrom from "./LoginFrom";

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginFrom />
    </div>
  );
};

export default Login;
