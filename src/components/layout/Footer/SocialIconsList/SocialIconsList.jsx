import React from "react";
import styles from "./SocialIconsList.module.css";
import { SocialIcon } from "../SocialIcon/SocialIcon";

export const SocialIconsList = ({ icons }) => (
  <div className={styles.credentials}>
    {icons.map((icon) => (
      <SocialIcon {...icon} key={icon.href} />
    ))}
  </div>
);
