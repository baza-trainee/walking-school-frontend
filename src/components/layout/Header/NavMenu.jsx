import React from "react";
import style from "./header.module.css";
import Link from "../../UI/Links/Link";
import { useMedia } from "../../../hooks/useMedia";

const NavMenu = () => {
  const { isDesktop } = useMedia();
  return (
    <>
      <div className={style.list}>
        <a href="#projects">Проєкти</a>
        <a href="#gallery">Галерея</a>
        <a href="#contacts">Контакти</a>
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
