import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import style from "../Partner.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const PartnersSlider = ({ partners }) => {
  const [slidersArr, setSlidersArr] = useState([]);

  useEffect(() => {
    if (partners.length < 10) {
      setSlidersArr([...partners, ...partners]);
    } else {
      setSlidersArr(partners);
    }
  }, [partners]);

  return (
    <Swiper
      className={style.swiperContainer}
      loop={true}
      speed={1000}
      centeredSlides={true}
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 38,
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      zoom={{
        maxRatio: 2,
        minRatio: 1,
      }}
    >
      {slidersArr.map((partner, index) => (
        <SwiperSlide key={index}>
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
