import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PartnerItem from "../PartnerItem/PartnerItem";
import style from "../Partner.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation } from "swiper/modules";

const PartnersSlider = ({ partners }) => {
  const [slidersArr, setSlidersArr] = useState([]);

  useEffect(() => {
    if (partners.length < 5) {
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
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {slidersArr?.map((partner, index) => (
        <SwiperSlide key={index}>
          <PartnerItem image={partner.img} />
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
