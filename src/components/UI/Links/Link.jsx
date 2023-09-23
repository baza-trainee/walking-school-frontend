import React from "react";
import style from "./Link.module.css";

const Link = ({
  variant = "large",
  className,
  children,
  disabled = false,
  type = "navLink",
  to,
  ...props
}) => {
  const variantClass = {
    large: style.large,
    small: style.small,
    tertiary: style.tertiary,
  };

  const strokeColor = disabled ? "#747474" : "#1D7D74";

  const childrenData = (
    <>
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
    </>
  );

  return (
    <a
      href={to}
      {...props}
      className={
        (variant === "tertiary"
          ? disabled
            ? `${style["tertiary-disabled"]}`
            : `${variantClass[variant]} ${style.tertiary}`
          : `${variantClass[variant]} ${style.link}` +
            (disabled ? ` ${style.disabled}` : "")) +
        " " +
        className
      }
    >
      <div>{childrenData}</div>
    </a>
  );
};

export default Link;
