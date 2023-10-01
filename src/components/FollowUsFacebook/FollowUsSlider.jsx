import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";
import Button from "../UI/Button/Button";
import styles from "./followUs.module.css";

export function FollowUsSlider({ slidesQuantity, Navigation }) {
  return (
    <>
      <section id="gallery" className={styles.sectionWrapper}>
        <div className={styles.sliderTop}>
          <h2 className={styles.title}>
            Стежте за останніми <br /> новинами у Facebook
          </h2>
          <div className={styles.arrowButtons}>
            <div className={`${styles.myArrow} swiper-button-prev`}></div>
            <div className={`${styles.myArrow} swiper-button-next`}></div>
          </div>
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
          {data.map((slide) => (
            <SwiperSlide className={styles.slide} key={slide.img}>
              <img src={slide.img} className={styles.image} alt="facebookImg" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttonWrapper}>
          <Button className={styles.follow}>Стежити</Button>
        </div>
      </section>
      ;
    </>
  );
}
