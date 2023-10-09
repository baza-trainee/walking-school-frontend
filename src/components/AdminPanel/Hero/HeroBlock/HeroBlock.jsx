import React from "react";
import styles from "./HeroBlock.module.css";
import { ReactComponent as Delete } from "../../../../assets/admin/hero/delete.svg";
import { ReactComponent as Edit } from "../../../../assets/admin/hero/edit.svg";

const HeroBlock = ({ image, title, subtitle, removeHandler, editHandler }) => {
  return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(106deg, #101712 0.76%, rgba(46, 196, 182, 0.00) 83.12%), url(${image}), lightgray -254.782px -109.218px / 162.772% 211.16% no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={styles.actions}>
        <div className={styles.action} onClick={removeHandler}>
          <Delete />
        </div>
        <div className={styles.action} onClick={editHandler}>
          <Edit />
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
