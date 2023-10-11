import React from "react";
import styles from "./MainAdmin.module.css";
import NavLinkAdmin from "../../AdminPanel/Sidebar/NavLink/NavLinkAdmin";
import { ReactComponent as Hero } from "../../../assets/admin/sidebar/hero.svg";
import { ReactComponent as Projects } from "../../../assets/admin/sidebar/projects.svg";
import { ReactComponent as Partners } from "../../../assets/admin/sidebar/partners.svg";
import { ReactComponent as Facebook } from "../../../assets/admin/sidebar/gallery.svg";
import { ReactComponent as Contacts } from "../../../assets/admin/sidebar/contact.svg";
import { ReactComponent as Logo } from "../../../assets/admin/sidebar/logo.svg";
import { ReactComponent as Logout } from "../../../assets/admin/common/logout.svg";
import { Outlet } from "react-router-dom";
import AdminButton from "../../AdminPanel/UI/Button/AdminButton";

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
              to={"hero"}
              icon={<Hero />}
              dropdownItems={[{ to: "/admin/hero/add", label: "Додати слайд" }]}
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
          </div>
          <AdminButton variant={"secondary"} icon={<Logout />}>
            Вийти
          </AdminButton>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainAdmin;
