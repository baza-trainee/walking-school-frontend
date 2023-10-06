import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";
import Button from "../UI/Button/Button";
import styles from "./followUs.module.css";
import { useEffect, useState } from "react";

export function FollowUsSlider({ slidesQuantity, Navigation }) {
  const [slides, setSlides] = useState(data);

  useEffect(() => {
    if (data.length < 8) {
      setSlides([...data, ...data]);
    }
  }, []);
  return (
    <>
      <section id="gallery" className={styles.sectionWrapper}>
        <div className={styles.sliderTop}>
          <h2 className={styles.title}>
            Стежте за останніми <br /> новинами у Facebook
          </h2>
        </div>
        <Swiper
          slidesPerView={slidesQuantity}
          loop
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <img src={slide.img} className={styles.image} alt="facebookImg" />
            </SwiperSlide>
          ))}
          <div className={styles.arrowButtons}>
            <div
              className={`${styles.myArrow} ${styles.left} swiper-button-prev`}
            ></div>
            <div
              className={`${styles.myArrow} ${styles.right} swiper-button-next`}
            ></div>
          </div>
        </Swiper>
        <div className={styles.buttonWrapper}>
          <Button className={styles.follow}>Стежити</Button>
        </div>
      </section>
      ;
    </>
  );
}
