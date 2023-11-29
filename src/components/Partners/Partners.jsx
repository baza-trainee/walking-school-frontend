import React, { useEffect, useState } from "react";
import PartnersSlider from "./PartnersSlider/PartnersSlider";
import style from "./Partner.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../../API/partners";
import SpinnerLoader from "../Loader/SpinnerLoader";

export const Partners = () => {
  const [partners, setPartners] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ["partners"],
    queryFn: () => getPartners(),
  });

  useEffect(() => {
    if (!isLoading && data) {
      setPartners(data);
    }
  }, [isLoading, data]);

  return (
    <section className={style.partners} id="projects">
      <div className={style.content}>
        <div className={style["partners-title"]}>
          <h2>Партнери</h2>
        </div>
      </div>
      <div className={style.carousel}>
        {isLoading ? <SpinnerLoader /> : <PartnersSlider partners={partners} />}
      </div>
    </section>
  );
};
