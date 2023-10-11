import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "../Projects.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation } from "swiper/modules";

const SwiperSlider = ({ items, isLoading }) => {
  const [slidersArr, setSlidersArr] = useState([]);

  useEffect(() => {
    if (items.length < 6) {
      setSlidersArr([...items, ...items]);
    } else {
      setSlidersArr(items);
    }
  }, [items]);

  return (
    <Swiper
      className={style.swiperContainer}
      loop={true}
      speed={1000}
      rewind={true}
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
      {slidersArr?.map((item, index) => (
        <SwiperSlide key={index}>
          <ProjectCard
            isLoading={isLoading}
            image={item.image}
            title={item.title}
            dates={item.dates}
            age={item.age}
            description={item.description}
          />
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

export default SwiperSlider;
