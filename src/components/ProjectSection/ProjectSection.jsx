import React from "react";
import style from "./projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectSection = () => {
  return (
    <section className={style.projects}>
      <div className={style.projects__title}>
        <div>
          <h2>Проєкти</h2>
        </div>
        <p>
          Спробую навчити Вас ходити у незвичних умовах, та всьому що сам знаю.
          Ми вчитемося ходити у Польських Татрах Спробую навчити
        </p>
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
