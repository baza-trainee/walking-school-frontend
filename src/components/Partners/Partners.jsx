import React from "react";
import { data } from "./data";
import PartnersSlider from "./PartnersSlider/PartnersSlider";
import style from "./Partner.module.css";

export const Partners = () => {
  return (
    <section className={style.partners} id="projects">
      <div className={style.content}>
        <div>
          <h2>Проєкти</h2>
        </div>
      </div>
      <div className={style.carousel}>
        <PartnersSlider partners={data} />
      </div>
    </section>
  );

  // return (
  //   <section className={style.partners} id="projects">
  //     <div className={style.content}>
  //       <div>
  //         <h2>Проєкти</h2>
  //       </div>
  //     </div>

  //     <div className={style.carousel}>
  //       {isMobile ? (
  //         <div
  //           data-testid={"mobile-slider"}
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             alignItems: "center",
  //             gap: "24px",
  //           }}
  //         >
  //           {partners.map((partner, index) => (
  //             <Fragment key={index}>
  //               <PartnerItem partner={partner} />
  //             </Fragment>
  //           ))}
  //         </div>
  //       ) : (
  //         <PartnersSlider partners={partners} />
  //       )}
  //     </div>
  //   </section>

  ///////////////////////////////////////////////////

  // let slidesQuantity;
  // if (isMobile) {
  //   slidesQuantity = 1;
  // } else if (isTablet) {
  //   slidesQuantity = 3;
  // } else {
  //   slidesQuantity = 5;
  // }
  //   return (
  //     <section className={styles.partners}>
  //       <div className={styles.content}>
  //         <h2 className={styles.title}>Партнери</h2>
  //         <div className={styles.carousel}>
  //           <Swiper
  //             className={styles.swiperContainer}
  //             slidesPerView={slidesQuantity}
  //             slidesQuantity={1}
  //             loop
  //             modules={[Navigation]}
  //             navigation={{
  //               nextEl: ".swiper-button-next",
  //               prevEl: ".swiper-button-prev",
  //             }}
  //           >
  //             {data.map((slide, index) => (
  //               <SwiperSlide className={styles.slide} key={index}>
  //                 <div className={styles["link-wrapper"]}>
  //                   <a href="#" target="_blank">
  //                     <img
  //                       src={slide.img}
  //                       alt="logotype"
  //                       className={styles.image}
  //                     />
  //                   </a>
  //                 </div>
  //               </SwiperSlide>
  //             ))}
  //             <div className={`${styles.myArrow} swiper-button-next`}></div>
  //             <div className={`${styles.myArrow} swiper-button-prev`}></div>
  //           </Swiper>
  //         </div>
  //       </div>
  //     </section>
  //   );
};
