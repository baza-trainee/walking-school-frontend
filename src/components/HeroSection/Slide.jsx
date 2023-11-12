import React from "react";
import styles from "./heroSection.module.css";
import { useMedia } from "../../hooks/useMedia";

export const Slide = ({ img, title, description }) => {
  const { isMobile } = useMedia();
  const slideStyle = {
    background: `linear-gradient(180deg, #000000, #2EC4B600, #080909), url(${img}) lightgray -1049.942px -15.136px / 641.792% 175.446% no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "right center" : "center center",
  };
  return (
    <div className={styles.heroWrapper} style={slideStyle}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title} title</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
