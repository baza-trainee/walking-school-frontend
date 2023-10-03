import React from "react";
import styles from "./MainAdmin.module.css";
import NavLinkAdmin from "../../AdminPanel/Sidebar/NavLink/NavLinkAdmin";
import { ReactComponent as Hero } from "../../../assets/admin/hero.svg";
import { ReactComponent as Projects } from "../../../assets/admin/projects.svg";
import { ReactComponent as Partners } from "../../../assets/admin/partners.svg";
import { ReactComponent as Facebook } from "../../../assets/admin/gallery.svg";
import { ReactComponent as Contacts } from "../../../assets/admin/contact.svg";
import { ReactComponent as Users } from "../../../assets/admin/users.svg";
import { ReactComponent as Logo } from "../../../assets/admin/logo.svg";
import { Outlet } from "react-router-dom";

const MainAdmin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__logo}>
          <Logo />
        </div>

        <div className={styles.sidebar__menu}>
          <div className={styles["sidebar__menu-navigation"]}>
            <NavLinkAdmin
              to={"#"}
              icon={<Hero />}
              dropdownItems={[{ to: "hero/add", label: "Додати слайд" }]}
            >
              Hero
            </NavLinkAdmin>
            <NavLinkAdmin
              to={"/admin/projects"}
              icon={<Projects />}
              dropdownItems={[
                { to: "/admin/projects/edit", label: "Редагувати опис" },
                { to: "/admin/projects/add", label: "Додати проєкт" },
              ]}
            >
              Проєкти
            </NavLinkAdmin>
            <NavLinkAdmin
              to={"partners"}
              icon={<Partners />}
              dropdownItems={[
                { to: "/admin/partners/add", label: "Додати партнера" },
              ]}
            >
              Партнери
            </NavLinkAdmin>
            <NavLinkAdmin to={"facebook"} icon={<Facebook />}>
              Facebook
            </NavLinkAdmin>
            <NavLinkAdmin to={"contacts"} icon={<Contacts />}>
              Контакти
            </NavLinkAdmin>
            <NavLinkAdmin to={"users"} icon={<Users />}>
              Користувачі
            </NavLinkAdmin>
          </div>
          <button className={styles["sidebar__menu-button"]}>Вийти</button>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainAdmin;
