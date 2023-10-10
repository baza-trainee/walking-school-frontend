import React from "react";
import Image from "../../../../assets/admin/common/image.svg";
import styles from "./NoHero.module.css";

const NoHero = () => {
  return (
    <div className={styles.container}>
      <img src={Image} alt="Image" />
      <p>У вас поки немає зображень</p>
    </div>
  );
};

export default NoHero;
