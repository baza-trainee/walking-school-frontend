import React, { useState } from "react";
import styles from "./ProjectsList.module.css";
import { v4 as uuidv4 } from "uuid";
import ListItem from "../../../../components/AdminPanel/ListItem/ListItem";
import SubHeader from "../../../../components/AdminPanel/SubHeader/SubHeader";
import StateFilter from "../../../../components/AdminPanel/StateFilter/StateFilter";

export const ProjectsList = ({
  projects,
  navigateToEdit,
  deleteFunc,
  handleSortByDate,
  setSelectedProject,
}) => {
  const [filter, setFilter] = useState({ value: "all", label: "Всі" });

  const filteredProjects = projects.filter((project) => {
    if (filter.value === "all") return true;
    return project.is_active === filter.value;
  });

  const onDelete = (projectId) => {
    deleteFunc();
    setSelectedProject(projectId);
  };

  return (
    <div className={styles.projects}>
      <div className={styles.stateFilterContainer}>
        <StateFilter
          currentOption={filter}
          handleChange={setFilter}
          placeholder={filter.label}
        />
      </div>

      <div className={styles.list}>
        <SubHeader withStateColumn={true} sortFunc={handleSortByDate} />
        <div className={styles.projectListContainer}>
          {filteredProjects.map((project) => {
            const { title, is_active, created } = project;
            console.log(project);
            return (
              <ListItem
                heading={title}
                date={created}
                state={is_active ? "Активний" : "Неактивний"}
                key={uuidv4()}
                withStateColumn={true}
                navigateToEdit={() => navigateToEdit(project.id)}
                deleteFunc={() => onDelete(project.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
