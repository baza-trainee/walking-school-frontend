import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../Projects.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation } from "swiper/modules";
import ProjectCard from "../ProjectCard/ProjectCard";

const SwiperSlider = ({ items, isLoading }) => {
  const [slidersArr, setSlidersArr] = useState(items);

  useEffect(() => {
    if (items && items.length < 6) {
      setSlidersArr([...items, ...items]);
    } else {
      setSlidersArr(items);
    }
  }, [items]);

  return (
    <>
      {slidersArr && (
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
                dates={item.period}
                age={item.age_category}
                description={item.description}
                isActive={item.is_active}
                url={item.url}
              />
            </SwiperSlide>
          ))}
          <div
            className={`${style.myArrow} ${style.right} swiper-button-next`}
          />
          <div
            className={`${style.myArrow} ${style.left} swiper-button-prev`}
          />
        </Swiper>
      )}
    </>
  );
};

export default SwiperSlider;
