import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import NavMenu from "./NavMenu";
import { useMedia } from "../../../hooks/useMedia";
import Logo from "../../../assets/main/header/logo-sm.svg";
import CloseIcon from "../../../assets/main/header/close.svg";
import OpenIcon from "../../../assets/main/header/open.svg";
import Container from "../Container";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isDesktop } = useMedia();
  const [isOpen, setIsOpen] = useState(false);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className={style.wrapper} id="header-wrapper">
      <header>
        <Container>
          <div className={style.main}>
            <div className={style.main__logo}>
              <NavLink to={"/"} onClick={goTop}>
                <img src={Logo} alt="Школа ходи" />
              </NavLink>
            </div>
            {isDesktop ? (
              <nav className={style.main__menu}>
                <NavMenu screenLarge={true} />
              </nav>
            ) : (
              <>
                <div onClick={() => setIsOpen(!isOpen)}>
                  <img
                    src={isOpen ? CloseIcon : OpenIcon}
                    alt={"menu toggle"}
                  />
                </div>
                <nav
                  className={`${style.main__dropdown} ${
                    isOpen ? style.open : ""
                  }`}
                >
                  <NavMenu screenLarge={false} setIsOpen={setIsOpen} />
                </nav>
              </>
            )}
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
