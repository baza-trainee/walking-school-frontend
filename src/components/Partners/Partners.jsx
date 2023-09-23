import React from "react";
import styles from "./partners.module.css";
import { data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMedia } from "../../hooks/useMedia";
import "swiper/css/navigation";

export const Partners = () => {
  const { isMobile, isTablet } = useMedia();
  let slidesQuantity;
  if (isMobile) {
    slidesQuantity = 1;
  } else if (isTablet) {
    slidesQuantity = 3;
  } else {
    slidesQuantity = 5;
  }
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Партнери</h2>

        <Swiper
          className={styles.swiperContainer}
          slidesPerView={slidesQuantity}
          loop
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {data.map((slide) => (
            <SwiperSlide className={styles.slide} key={slide.img}>
              <a href="#" target="_blank">
                <img src={slide.img} className={styles.image} />
              </a>
            </SwiperSlide>
          ))}
          <div className={`${styles.myArrow} swiper-button-next`}></div>
          <div className={`${styles.myArrow} swiper-button-prev`}></div>
        </Swiper>
      </div>
    </section>
  );
};
