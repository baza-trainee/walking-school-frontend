import React, { cloneElement, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLink.module.css";
import { ReactComponent as ArrowDown } from "../../../../assets/admin/arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../../../assets/admin/arrow_up.svg";

const NavLinkAdmin = ({ children, icon, to, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive ? `${styles.link} ${styles.active}` : `${styles.link}  `
        }
      >
        {cloneElement(icon)}
        <div className={styles["link__action"]}>
          {children}
          {dropdownItems ? (
            isOpen ? (
              <ArrowUp onClick={(e) => menuToggleHandler(e)} />
            ) : (
              <ArrowDown onClick={(e) => menuToggleHandler(e)} />
            )
          ) : (
            ""
          )}
        </div>
      </NavLink>
      {isOpen && dropdownItems && (
        <ul className={styles.dropdown}>
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavLinkAdmin;
