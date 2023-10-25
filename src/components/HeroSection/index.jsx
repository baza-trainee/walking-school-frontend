import { dataDesc } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "./Slide";
import "./pagination.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  let data = dataDesc;
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
        {data.map((element, index) => (
          <SwiperSlide key={index} role="slide" className="swiper-slide">
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

export default HeroSection;
