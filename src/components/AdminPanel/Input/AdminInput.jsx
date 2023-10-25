import React, { cloneElement } from "react";
import styles from "./Input.module.css";

/**
 * @description input for login page and add/edit items
 * @params variant has 3 options login, admin, textarea
 * @params icon should be received as a prop and as a ReactComponent, for example import {ReactComponent as Eye} from '../../../assets/admin/eye.svg'
 * */

const AdminInput = ({
  className,
  disabled = false,
  label,
  placeholder = "Введіть логін",
  id,
  error,
  onMouseDown,
  onClick,
  variant = "textarea",
  icon,
  type = "text",
  ...props
}) => {
  const inputClass = {
    login: styles.login,
    admin: styles.admin,
    textarea: styles.textarea,
  };
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        className={
          disabled ? `${styles.field} ${styles.disabled}` : styles.field
        }
        style={{ background: error ? "#FFF" : "" }}
      >
        {variant === "textarea" ? (
          <textarea
            id={id}
            placeholder={placeholder}
            className={inputClass[variant]}
            {...props}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            {...props}
            className={inputClass[variant]}
          />
        )}
        {icon ? (
          <div
            className={
              variant === "textarea"
                ? `${styles["field__icon-textarea"]}`
                : `${styles["field__icon-input"]}`
            }
            onMouseDown={onMouseDown}
            onClick={onClick}
          >
            {cloneElement(icon)}
          </div>
        ) : null}
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};

export default AdminInput;
