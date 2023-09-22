import React from "react";
import style from "./header.module.css";
import Link from "../../UI/Links/Link";
import { useMedia } from "../../../hooks/useMedia";

const NavMenu = ({ setIsOpen }) => {
  const { isDesktop } = useMedia();

  const onCLickHandler = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className={style.list}>
        <div
          className={style.list__link}
          onClick={() => onCLickHandler("projects")}
        >
          Проєкти
        </div>
        <div
          className={style.list__link}
          onClick={() => onCLickHandler("gallery")}
        >
          Галерея
        </div>
        <div
          className={style.list__link}
          onClick={() => onCLickHandler("contacts")}
        >
          Контакти
        </div>
      </div>
      <div className={style.btn}>
        <Link to={"/"} variant={isDesktop ? "large" : "small"}>
          Підтримати
        </Link>
      </div>
    </>
  );
};

export default NavMenu;
