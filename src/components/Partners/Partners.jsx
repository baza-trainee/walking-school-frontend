import React from "react";
import { data } from "./data";
import PartnersSlider from "./PartnersSlider/PartnersSlider";
import style from "./Partner.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../../API/partners";

export const Partners = () => {
  // const { data, loading, error } = useQuery({
  //   queryKey: ["partners"],
  //   queryFn: () => getPartners,
  // });

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
