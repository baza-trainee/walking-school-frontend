import React, { cloneElement } from "react";
import styles from "./Input.module.css";

/**
 * @description input for login page and add/edit items
 * @params variant has 2 options login and admin
 * @params icon should be received as a prop and as a ReactComponent, for example import {ReactComponent as Eye} from '../../../assets/admin/eye.svg'
 * */

const AdminInput = ({
  disabled = false,
  label = "логін",
  placeholder = "Введіть логін",
  id,
  error,
  onClick,
  variant = "login",
  icon,
  ...props
}) => {
  const inputClass = {
    login: styles.login,
    admin: styles.admin,
  };

  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        className={
          disabled ? `${styles.field} ${styles.disabled}` : styles.field
        }
        style={{ background: error ? "#FFF" : "" }}
      >
        <input
          type="text"
          placeholder={placeholder}
          id={id}
          {...props}
          className={inputClass[variant]}
        />
        {icon ? (
          <div className={styles.field__icon}>
            <div onClick={onClick}>{cloneElement(icon)}</div>
          </div>
        ) : null}
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};

export default AdminInput;
