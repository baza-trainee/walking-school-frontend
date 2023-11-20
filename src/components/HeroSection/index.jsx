import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "./Slide";
import "./pagination.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "react-query";
import { getAllHeros } from "../../API/heroAPI";
import HeroList from "../../assets/main/hero/hero1.svg";
import React from "react";

const HeroSection = () => {
  const { data } = useQuery("hero-client", getAllHeros);
  const initialImage = [
    {
      title: "Школа ходи",
      description:
        "Наша Школа ходи для ветеранів - це не просто набір екстремальних пригод. Це потужний інструмент для відновлення та підвищення якості життя!",
      image: HeroList,
    },
  ];

  const herosList = data ? data : initialImage;

  return (
    <section data-testid="hero-slider">
      <Swiper
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
        {herosList.map((element, index) => (
          <SwiperSlide key={index} role="slide" className="swiper-slide">
            <Slide
              img={element.image}
              title={element.title}
              description={element.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
