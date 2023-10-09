import React from "react";
import styles from "./followUs.module.css";
import { data } from "./data";
import Button from "../UI/Button/Button";

export const SmallScreen = () => {
  return (
    <section
      className={styles.sectionWrapperSmallScreen}
      data-testid="small-section"
      id="gallery"
    >
      <h2 className={styles.title}>
        Стежте за новинами у<br /> Facebook
      </h2>
      <div>
        {data.map((element, index) => (
          <div key={index} className={styles.imgWrapper}>
            <img
              src={element.img}
              key={index}
              className={styles.imageSmall}
              alt="facebookImg"
            />
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button className={styles.follow}>Стежити</Button>
      </div>
    </section>
  );
};
