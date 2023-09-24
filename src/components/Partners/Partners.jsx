import React from "react";
import styles from "./Partners.module.css";
import "./arrows.css";
import { data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMedia } from "../../hooks/useMedia";
import "swiper/css/navigation";
import Container from "../layout/Container";

import Facebook from "../../assets/partners/Facebook.svg";
import Google from "../../assets/partners/Google.svg";
import Pinterest from "../../assets/partners/pinterest.svg";
import Twitch from "../../assets/partners/twich.svg";
import YouTube from "../../assets/partners/YouTube.svg";

const Partners = () => {
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
    <Container>
      <div className={styles.content}>
        <h2 className={styles.title}>Партнери</h2>

        <Swiper
          className={styles.swiperContainer}
          speed={700}
          loop
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <img src={Facebook} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Facebook} />
          </SwiperSlide>
        </Swiper>
        <div className={`${styles.myArrow} swiper-button-next`}></div>
        <div className={`${styles.myArrow} swiper-button-prev`}></div>
      </div>
    </Container>
  );
};

export default Partners;
