import React from "react";
import fillerImage from "../../assets/images/Image.png";
import styles from "./Offerings.module.css";
import { TitleTemplate } from "../TitleTemplate/TitleTemplate";
import { OfferingsList } from "./OfferingsList/OfferingsList";

export const Offerings = () => {
  const offeringsList = [
    "Фізичне відновлення",
    "Подолання власних фізичних обмежень",
    "Зміцнення духу та самовпевненості",
    "Підтримка та спільнота однодумців",
    "Повернення до активного способу життя",
    "Розширення горизонтів",
    "Збереження фізичного здоров'я",
    "Безкоштовну подорж",
  ];

  return (
    <section className={styles.Offerings}>
      <div className="offerings__container">
        <div className={styles.content}>
          <TitleTemplate
            title="Що ви отримаєте"
            subtitle="Take part in the various events you want with ease with an extraordinary experience with Coco."
          />
          <div className="offerings__image">
            <img src={fillerImage} alt="Offerings" className="offerings__img" />
          </div>
          <div>
            <OfferingsList list={offeringsList.slice(0, 4)} />
            <OfferingsList list={offeringsList.slice(4)} />
          </div>
        </div>
      </div>
    </section>
  );
};
