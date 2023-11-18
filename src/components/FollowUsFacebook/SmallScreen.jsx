import React from "react";
import styles from "./followUs.module.css";
import Button from "../UI/Button/Button";

export const SmallScreen = ({ data }) => {
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
        {data?.map((element, index) => (
          <div key={index} className={styles.imgWrapper}>
            <img
              src={element.image}
              key={index}
              className={styles.imageSmall}
              alt="facebookImg"
            />
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <a
          href="https://www.facebook.com/oleksandr.shvetsov"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button className={styles.follow}>Стежити</Button>
        </a>
      </div>
    </section>
  );
};
