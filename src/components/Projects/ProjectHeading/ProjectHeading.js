import React from "react";
import style from "../Projects.module.css";
import { useQuery } from "@tanstack/react-query";
import { getProjectDescription } from "../../../API/projectsAPI";

const ProjectHeading = () => {
  const { data: sectionDescription } = useQuery(
    ["section-description"],
    getProjectDescription,
  );

  const description =
    sectionDescription?.description ??
    "Спробую навчити Вас ходити у незвичних умовах, та всьому що сам знаю. Ми вчитемося ходити у Польських Татрах";

  return (
    <div className={style.projects__title}>
      <div>
        <h2>Проєкти</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectHeading;
