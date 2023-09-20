import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import { useMedia } from "../../hooks/useMedia";
import NavMenu from "./NavMenu";
import Logo from "../../assets/img/header/logo-sm.svg";
import CloseIcon from "../../assets/img/header/close.svg";
import OpenIcon from "../../assets/img/header/open.svg";

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
            <img src={Logo} alt="" />
          </div>
          {isDesktop ? (
            <nav className={style.main__menu}>
              <NavMenu />
            </nav>
          ) : (
            <>
              <div onClick={() => setIsOpen(!isOpen)}>
                <img src={isOpen ? CloseIcon : OpenIcon} alt={"menu toggle"} />
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
