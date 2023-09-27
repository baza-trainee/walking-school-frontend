import React from "react";
import styles from "./Button.module.css";
import { ReactComponent as Logout } from "../../../../assets/admin/logout.svg";
import { ReactComponent as DownLoad } from "../../../../assets/admin/download.svg";

const AdminButton = ({
  children,
  variant = "tertiary",
  disabled = true,
  ...props
}) => {
  const buttonClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
  };
  return (
    <button
      className={`${styles.btn} ${buttonClass[variant]} ${
        disabled ? styles.disabled : ""
      } `}
      {...props}
    >
      {variant === "secondary" && (
        <>
          {" "}
          <span>
            <Logout />
          </span>{" "}
          {children}{" "}
        </>
      )}
      {variant === "tertiary" && (
        <>
          {" "}
          {children}{" "}
          <span>
            <DownLoad />
          </span>{" "}
        </>
      )}
      {variant !== "secondary" && variant !== "tertiary" && children}
    </button>
  );
};

export default AdminButton;
