import React from "react";
import styles from "./MainAdmin.module.css";
import NavLinkAdmin from "../../AdminPanel/Sidebar/NavLink/NavLinkAdmin";
import { ReactComponent as Hero } from "../../../assets/admin/hero.svg";
import { ReactComponent as Projects } from "../../../assets/admin/projects.svg";
import { ReactComponent as Partners } from "../../../assets/admin/partners.svg";
import { ReactComponent as Facebook } from "../../../assets/admin/gallery.svg";
import { ReactComponent as Contacts } from "../../../assets/admin/contact.svg";
import { ReactComponent as Users } from "../../../assets/admin/users.svg";
import { Outlet } from "react-router-dom";

const MainAdmin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="123"
            height="60"
            viewBox="0 0 123 60"
            fill="none"
          >
            <path
              d="M4.32422 0.263672H7.92949V25.7727H4.32422V0.263672ZM6.40326 22.3655H29.5191V25.7727H6.40326V22.3655ZM16.0534 0.263672H19.6587V25.7727H16.0534V0.263672ZM27.7765 0.263672H31.3818V25.7727H27.7765V0.263672Z"
              fill="#131313"
            />
            <path
              d="M33.3789 0.263439H36.9842V25.7724H33.3789V0.263439ZM35.1215 11.4012H43.1312V14.8084H35.1215V11.4012ZM39.9645 14.5329L43.1131 12.6886L52.9916 25.7604H48.0103L39.9645 14.5329ZM39.9645 11.7604L47.3914 0.251465H51.898L41.7792 14.8982L39.9645 11.7604Z"
              fill="#131313"
            />
            <path
              d="M58.6041 9.28158C58.5827 8.23391 58.8092 7.19594 59.265 6.25164C59.6753 5.41625 60.3176 4.71585 61.1157 4.23368C61.9724 3.76986 62.9319 3.52689 63.9068 3.52689C64.8818 3.52689 65.8412 3.76986 66.6979 4.23368C67.5009 4.71353 68.1477 5.41426 68.5606 6.25164C69.0165 7.19594 69.2429 8.23391 69.2216 9.28158V10.3774H72.899V9.40134C72.9356 7.69043 72.5519 5.99655 71.7813 4.46721C71.0746 3.08281 69.9756 1.93559 68.6207 1.16781C67.1674 0.401236 65.5481 0.000488281 63.9038 0.000488281C62.2595 0.000488281 60.6402 0.401236 59.1869 1.16781C57.832 1.93559 56.733 3.08281 56.0263 4.46721C55.2557 5.99655 54.872 7.69043 54.9086 9.40134V10.3774H58.586L58.6041 9.28158Z"
              fill="#131313"
            />
            <path
              d="M58.6032 10.3774H54.9258V43.4852H58.6032V10.3774Z"
              fill="#131313"
            />
            <path
              d="M72.9118 10.3774H69.2344V43.4852H72.9118V10.3774Z"
              fill="#131313"
            />
            <path
              d="M69.2393 45.4373C69.2559 46.473 69.0296 47.4982 68.5784 48.4313C68.168 49.2704 67.5206 49.9718 66.7156 50.4493C65.8602 50.9168 64.9002 51.1619 63.9246 51.1619C62.9489 51.1619 61.9889 50.9168 61.1335 50.4493C60.3263 49.9727 59.6767 49.2713 59.2647 48.4313C58.8135 47.4982 58.5872 46.473 58.6038 45.4373V43.4912H54.9264V45.2876C54.8893 47.0005 55.2729 48.6964 56.044 50.2277C56.7525 51.6109 57.851 52.7576 59.2046 53.5271C60.6579 54.2937 62.2772 54.6944 63.9215 54.6944C65.5658 54.6944 67.1852 54.2937 68.6385 53.5271C69.992 52.7576 71.0906 51.6109 71.7991 50.2277C72.5701 48.6964 72.9538 47.0005 72.9167 45.2876V43.4912H69.2393V45.4373Z"
              fill="#131313"
            />
            <path
              d="M74.9531 22.5048C75.9318 22.5465 76.899 22.2994 77.7091 21.8007C78.4734 21.2339 79.0165 20.4599 79.2585 19.5929C79.6335 18.3268 79.8044 17.0185 79.7662 15.7082V0.47998H83.7222V15.4934C83.7914 17.512 83.4975 19.5274 82.8519 21.4606C82.4021 22.829 81.4481 24.0167 80.1486 24.8261C78.7043 25.603 77.0404 25.9805 75.3619 25.9121H74.9729L74.9531 22.5048ZM82.2057 0.47998H95.6692V3.86934H82.2189L82.2057 0.47998ZM93.5792 0.47998H97.5352V25.9002H93.5792V0.47998Z"
              fill="#131313"
            />
            <path
              d="M109.541 0.263672H112.606L122.04 25.7727H118.17L111.073 5.19182L103.977 25.7727H100.107L109.541 0.263672ZM104.452 16.7727H117.924V20.1739H104.452V16.7727Z"
              fill="#131313"
            />
            <path
              d="M42.1686 40.1376L48.592 29.2095H52.6239L44.1695 43.0179L37.3014 54.7185H33.2695L42.1686 40.1376ZM42.3248 43.5089L41.778 42.6286L33.4678 29.2095H37.4997L43.6828 39.5927L44.2837 40.5388L53.0325 54.7185H48.9765L42.3248 43.5089Z"
              fill="#131313"
            />
            <path
              d="M74.9728 51.3113H97.1693V54.7185H74.9728V51.3113ZM74.9728 51.3113H78.5781V59.9939H74.9728V51.3113ZM74.9728 51.3113H75.129C75.8101 51.3356 76.4857 51.1827 77.0894 50.8677C77.6931 50.5527 78.2041 50.0865 78.5721 49.5149C79.3732 48.3173 79.7738 46.6406 79.7738 44.4849V29.2095H83.3791V44.7783C83.4236 46.4238 83.1057 48.059 82.4477 49.5688C81.8771 50.8296 80.9337 51.8867 79.7438 52.5987C78.4425 53.3244 76.968 53.6845 75.4775 53.6406H74.9668L74.9728 51.3113ZM82.0271 29.2095H93.6301V32.6107H82.0452L82.0271 29.2095ZM91.7313 29.2095H95.3366V54.7185H91.7313V29.2095ZM95.1623 51.3113H98.7676V59.9939H95.1623V51.3113Z"
              fill="#131313"
            />
            <path
              d="M117.969 54.7078V34.7035L118.45 35.1575L103.787 54.7078H100.418V29.2798H104.474V49.5888L103.993 49.1348L118.712 29.2917H122.039V54.7198L117.969 54.7078Z"
              fill="#131313"
            />
          </svg>
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
              to={"/projects"}
              icon={<Projects />}
              dropdownItems={[
                { to: "/projects/edit", label: "Редагувати опис" },
                { to: "/projects/add", label: "Додати проєкт" },
              ]}
            >
              Проєкти
            </NavLinkAdmin>
            <NavLinkAdmin to={"/partners"} icon={<Partners />}>
              Партнери
            </NavLinkAdmin>
            <NavLinkAdmin to={"/facebook"} icon={<Facebook />}>
              Facebook
            </NavLinkAdmin>
            <NavLinkAdmin to={"/contacts"} icon={<Contacts />}>
              Контакти
            </NavLinkAdmin>
            <NavLinkAdmin to={"/users"} icon={<Users />}>
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
