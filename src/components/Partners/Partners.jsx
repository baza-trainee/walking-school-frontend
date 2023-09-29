import React from "react";
import { data } from "./data";
import PartnersSlider from "./PartnersSlider/PartnersSlider";
import style from "./Partner.module.css";

export const Partners = () => {
  return (
    <section className={style.partners} id="projects">
      <div className={style.content}>
        <div className={style["partners-title"]}>
          <h2>Партнери</h2>
        </div>
      </div>
      <div className={style.carousel}>
        <PartnersSlider partners={data} />
      </div>
    </section>
  );
};
