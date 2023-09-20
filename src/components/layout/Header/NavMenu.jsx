import React from "react";
import style from "./header.module.css";
import Link from "../Links/Link";

const NavMenu = () => {
  return (
    <>
      <div className={style.list}>
        <a href="#projects">Проєкти</a>
        <a href="#gallery">Галерея</a>
        <a href="#contacts">Контакти</a>
      </div>
      <div className={style.btn}>
        <Link to={"/"} variant={"small"}>
          Підтримати
        </Link>
      </div>
    </>
  );
};

export default NavMenu;
