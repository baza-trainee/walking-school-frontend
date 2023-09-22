import React from "react";
import style from "./header.module.css";
import Link from "../../Links/Link";
import { useMedia } from "../../../hooks/useMedia";

const NavMenu = ({ setIsOpen }) => {
  const { isDesktop } = useMedia();
  return (
    <>
      <div className={style.list}>
        <a onClick={() => setIsOpen(false)} href="#projects">
          Проєкти
        </a>
        <a onClick={() => setIsOpen(false)} href="#gallery">
          Галерея
        </a>
        <a onClick={() => setIsOpen(false)} href="#contacts">
          Контакти
        </a>
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
