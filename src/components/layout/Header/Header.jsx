import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import { useMedia } from "../../../hooks/useMedia";
// import Burger from "./Burger";
import NavMenu from "./NavMenu";

const Header = () => {
  const { isDesktop } = useMedia();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className={style.wrapper}>
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
            <>
              <div onClick={() => setIsOpen(!isOpen)}>
                <img
                  src={
                    isOpen
                      ? "/images/header/close.svg"
                      : "/images/header/open.svg"
                  }
                  alt={"menu toggle"}
                />
              </div>
              <nav
                className={`${style.main__dropdown} ${
                  isOpen ? style.open : ""
                }`}
              >
                <NavMenu />
              </nav>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
