import { useState } from "react";
import styles from "./DropDown.module.css";
import arrowUp from "../../../assets/images/arrowUp.svg";
import arrowDown from "../../../assets/images/arrowDown.svg";

export const DropDown = () => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Тунельний політ",
    "Банджі джампінг",
    "Стрибки з парашутом",
    "Стежка y хмарах",
  ];

  const handleOpen = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.content} onClick={handleOpen}>
        <div className={styles.optionLabel}>
          <div>{options[0]}</div>
          <img
            src={isActive ? arrowUp : arrowDown}
            alt="arrow"
            className={styles.arrowIcon}
          />
        </div>
      </div>
      {isActive && (
        <div className={styles.itemContainer}>
          {options.slice(1).map((item, index) => (
            <div key={index} className={styles.item}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
