import React from "react";
import styles from "./AdminHero.module.css";
import close from "../../../assets/admin/common/close.svg";

export const SelectedImageField = ({ url, deleteImg }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundImageStyle} className={styles.selectedImage}>
      <div className={styles.icon} onClick={deleteImg}>
        <img src={close} alt="close" />
      </div>
    </div>
  );
};
