import React from "react";
import style from "./button.module.scss";

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
        disabled ? (
          <img src="/images/btn_arrow_disabled.svg" alt={"arrow"} />
        ) : (
          <img src="/images/btn_arrow.svg" alt={"arrow"} />
        )
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
