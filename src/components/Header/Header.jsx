import React, { useState } from "react";
import style from "./header.module.scss";
import { useMedia } from "../../hooks/useMedia";
import Burger from "./Burger";
import NavMenu from "./NavMenu";

const Header = () => {
  const { isDesktop } = useMedia();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className={style.main}>
        <div className={style.main__logo}>
          <img src="/images/header/logo-sm.svg" alt="" />
        </div>
        {isDesktop ? (
          <nav className={style.main__menu}>
            <NavMenu />
          </nav>
        ) : (
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src="/images/header/open.svg" alt={"menu toggle"} />
          </div>
        )}

        {isOpen && (
          <nav className={style.main__dropdown}>
            <NavMenu />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
