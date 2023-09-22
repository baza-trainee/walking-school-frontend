import React from "react";
import bannerMobile from "../../assets/images/offeringsBannerMobile.png";
import bannerTablet from "../../assets/images/offeringsBanner.png";
import bannerDesktop from "../../assets/images/offeringsBannerDesktop.png";
import styles from "./Offerings.module.css";
import { TitleTemplate } from "../TitleTemplate/TitleTemplate";
import { OfferingsList } from "./OfferingsList/OfferingsList";
import Container from "../layout/Container";
import { useMedia } from "../../hooks/useMedia";

export const Offerings = () => {
  const { isMobile, isTablet } = useMedia();
  const imageMap = {
    mobile: bannerMobile,
    tablet: bannerTablet,
    desktop: bannerDesktop,
  };

  const imageSrc = isMobile
    ? imageMap.mobile
    : isTablet
    ? imageMap.tablet
    : imageMap.desktop;

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
    <section className={styles.offerings}>
      <Container>
        <div className={styles.content}>
          <TitleTemplate
            title="Що ви отримаєте"
            subtitle="Спробую навчити Вас ходити у незвичних умовах, та всьому що сам знаю. Ми вчитемося ходити у Польських Татрах"
            className={styles.customTitle}
          />
          <div className={styles.image}>
            <img src={imageSrc} alt="Offerings" className={styles.img} />
          </div>
          <div className={styles.listContainer}>
            <OfferingsList
              list={offeringsList.slice(0, 4)}
              className={styles.list}
            />
            <OfferingsList
              list={offeringsList.slice(4)}
              className={styles.list}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
