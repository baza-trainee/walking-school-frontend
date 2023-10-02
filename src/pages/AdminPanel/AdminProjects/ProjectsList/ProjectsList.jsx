import React, { useState } from "react";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import styles from "./ProjectsList.module.css";
import { v4 as uuidv4 } from "uuid";

export const ProjectsList = ({ projects }) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.status === filter;
  });

  return (
    <div className={styles.projects}>
      <select
        className={styles.customSelect}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Всі</option>
        <option value="Активний">Активний</option>
        <option value="Неактивний">Неактивний</option>
      </select>
      <div className={styles.list}>
        <ProjectItem isHeader={true} />
        {filteredProjects.map((project) => (
          <ProjectItem project={project} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};
