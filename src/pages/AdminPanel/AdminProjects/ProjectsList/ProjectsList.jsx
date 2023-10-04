import React, { useState } from "react";
import styles from "./ProjectsList.module.css";
import { v4 as uuidv4 } from "uuid";
import ListItem from "../../../../components/AdminPanel/ListItem/ListItem";
import SubHeader from "../../../../components/AdminPanel/SubHeader/SubHeader";

export const ProjectsList = ({ projects, navigateToEdit, deleteFunc }) => {
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
        <SubHeader withStateColumn={true} />
        {filteredProjects.map((project) => {
          const { project_name, status, creation_date } = project;
          return (
            <ListItem
              heading={project_name}
              date={creation_date}
              state={status}
              key={uuidv4()}
              withStateColumn={true}
              navigateToEdit={() => navigateToEdit(project.id)}
              deleteFunc={() => deleteFunc(project.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
