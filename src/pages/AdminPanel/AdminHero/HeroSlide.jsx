import React from "react";
import styles from "./AdminHero.module.css";
import Delete from "../../../assets/admin/common/delete.svg";
import Edit from "../../../assets/admin/common/edit.svg";
import { NavLink } from "react-router-dom";
import EditSlideForm from "./slideActions/EditSlideForm";

const HeroSlide = ({ image, title, subtitle, deleteHeroSlide }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slide = {
    title: title,
    subtitle: subtitle,
    selectedFile: image,
  };

  return (
    <div style={backgroundImageStyle} className={styles.heroSlide}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{subtitle}</p>
      </div>
      <div className={styles.iconsWrapper}>
        <div className={styles.icon} onClick={() => deleteHeroSlide(title)}>
          <img src={Delete} alt="delete" />
        </div>
        <NavLink
          to="/admin/hero/edit"
          element={<EditSlideForm slide={slide} />}
        >
          <div className={styles.icon}>
            <img src={Edit} alt="edit" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSlide;
