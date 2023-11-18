import React from "react";
import styles from "./SocialIconsList.module.css";
import { SocialIcon } from "../SocialIcon/SocialIcon";
import { v4 as uuidv4 } from "uuid";

export const SocialIconsList = ({ icons }) => (
  <div className={styles.credentials}>
    {icons.map((icon) => (
      <SocialIcon {...icon} key={uuidv4()} />
    ))}
  </div>
);
