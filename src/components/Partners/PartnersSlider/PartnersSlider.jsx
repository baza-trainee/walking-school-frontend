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
    if (partners[0]) {
      const array = [...partners];
      if (partners.length < 12) {
        const newArray = Array.from(
          { length: 12 },
          (_, index) => array[index % array.length],
        );
        setSlidersArr(newArray);
      } else {
        setSlidersArr(partners);
      }
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
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className={style["link-wrapper"]}>
            <img src={partner.image} alt="logotype" className={style.image} />
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
