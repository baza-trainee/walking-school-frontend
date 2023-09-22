import React, { useRef } from "react";
import { dataMob, dataDesc, dataTab } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMedia } from "../../hooks/useMedia";
import { Slide } from "./Slide";
import "./pagination.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export const HeroSection = () => {
  const swiperRef = useRef(null);
  const { isTablet, isDesktop } = useMedia();
  let data = [];
  if (isDesktop) {
    data = dataDesc;
  } else if (isTablet) {
    data = dataTab;
  } else {
    data = dataMob;
  }
  return (
    <section>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {data.map((element) => (
          <SwiperSlide key={element.img}>
            <Slide
              img={element.img}
              title={element.title}
              description={element.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
