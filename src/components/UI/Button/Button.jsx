import React from "react";
import style from "./button.module.css";

const Button = ({
  variant = "large",
  className,
  children,
  disabled = false,
  ...props
}) => {
  const variantClass = {
    large: style.large,
    small: style.small,
    tertiary: style.tertiary,
  };

  const strokeColor = disabled ? "#94949F" : "#5D5A88";

  return (
    <button
      className={
        `${variantClass[variant]} ${disabled ? " disabled" : ""}` +
        " " +
        className
      }
      disabled={disabled}
      {...props}
    >
      {children}
      {variant === "tertiary" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M4.25 9H14.75"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 3.75L14.75 9L9.5 14.25"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
