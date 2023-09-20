import React from "react";
import style from "./header.module.css";

const NavMenu = () => {
  return (
    <>
      <div className={style.list}>
        <a href="#projects">Проєкти</a>
        <a href="#gallery">Галерея</a>
        <a href="#contacts">Контакти</a>
      </div>
      <button>Підтримати</button>
    </>
  );
};

export default NavMenu;
