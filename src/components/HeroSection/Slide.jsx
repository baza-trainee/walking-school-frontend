import React from "react";
import styles from "./heroSection.module.css";
import { useMedia } from "../../hooks/useMedia";

export const Slide = ({ img, title, description }) => {
  const { isMobile } = useMedia();
  const slideStyle = {
    backgroundImage: `linear-gradient(180deg, #000000, #2EC4B600, #080909), url(${img})`,
    backgroundColor: "lightgray",
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center center" : "center center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={styles.heroWrapper} style={slideStyle}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
