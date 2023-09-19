import React from "react";
import style from "./link.module.css";

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

  const childrenData = (
    <>
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
    </>
  );

  return (
    <div
      className={
        `${variantClass[variant]} ${style.link} ${
          disabled ? " disabled" : ""
        }` +
        " " +
        className
      }
    >
      <a href={to} {...props}>
        {childrenData}
      </a>
    </div>
  );
};

export default Link;
