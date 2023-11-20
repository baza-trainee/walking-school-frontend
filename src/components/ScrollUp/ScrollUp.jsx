import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Icon from "../../assets/main/scrollUp/scrollUp.svg";
import style from "./ScrollUp.module.css";

const scroll = () => window.scrollTo(0, 0);

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const buttonStyle = visible
    ? `${style.scrollButton} ${style.scrollButton_visible}`
    : style.scrollButton;

  const toggleVisibility = () => {
    const scrollLength = document.documentElement.scrollTop;
    if (scrollLength > 600) {
      setVisible(true);
    } else if (scrollLength <= 600) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  return (
    <Button data-testid="scroll" onClick={scroll} className={buttonStyle}>
      <img src={Icon} alt="" className={style.icon} />
    </Button>
  );
};

export default ScrollUp;
