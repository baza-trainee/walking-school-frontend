import { Swiper, SwiperSlide } from "swiper/react";
// import { data } from "./data";
import Button from "../UI/Button/Button";
import styles from "./followUs.module.css";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getFacebook } from "../../API/followUsFacebook";

export function FollowUsSlider({ data, slidesQuantity, Navigation }) {
  const [slides, setSlides] = useState(data);

  useEffect(() => {
    if (data?.length < 8) {
      setSlides([...data, ...data]);
    }
  }, [data]);

  return (
    <>
      <section id="gallery" className={styles.sectionWrapper}>
        <div className={styles.sliderTop}>
          <h2 className={styles.title}>
            Стежте за останніми <br /> новинами у Facebook
          </h2>
        </div>
        <Swiper
          slidesPerView={slidesQuantity - 0.5}
          spaceBetween={0}
          loop
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide className={styles.imgWrapper} key={index}>
              <img
                src={slide.img}
                className={styles.imageSmall}
                alt="facebookImg"
              />
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
          <a
            href="https://www.facebook.com/oleksandr.shvetsov"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button className={styles.follow}>Стежити</Button>
          </a>
        </div>
      </section>
    </>
  );
}
