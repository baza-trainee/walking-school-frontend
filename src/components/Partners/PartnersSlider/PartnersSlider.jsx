import React from "react";
import { useMedia } from "../../../hooks/useMedia";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import style from "../Partner.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

register();

const PartnersSlider = ({ partners }) => {
  const { isMobile, isTablet } = useMedia();

  let slidesQuantity;
  let stylesSwiperSlide;

  if (isMobile) {
    slidesQuantity = 1;
    stylesSwiperSlide = {
      alignSelf: "center",
    };
  } else if (isTablet) {
    slidesQuantity = 3;
    stylesSwiperSlide = {
      alignSelf: "center",
      maxWidth: "240px",
      width: "100%",
    };
  } else {
    slidesQuantity = 5;
    stylesSwiperSlide = {
      alignSelf: "center",
      maxWidth: "240px",
      width: "100%",
    };
  }
  return (
    <Swiper
      className={style.swiperContainer}
      loop={true}
      speed={1000}
      slidesPerView={slidesQuantity}
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      {partners.map((partner, index) => (
        <SwiperSlide key={index} style={stylesSwiperSlide}>
          <div className={style["link-wrapper"]}>
            <img src={partner.img} alt="logotype" className={style.image} />
          </div>
        </SwiperSlide>
      ))}
      <div
        className={`${style.myArrow} ${style.right} swiper-button-next`}
      ></div>
      <div
        className={`${style.myArrow} ${style.left} swiper-button-prev`}
      ></div>
    </Swiper>
  );
};

export default PartnersSlider;
