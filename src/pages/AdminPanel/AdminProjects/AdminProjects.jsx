import { useState } from "react";
import { AdminHeader } from "../../../components/AdminPanel/AdminHeader/AdminHeader";
import styles from "./AdminProjects.module.css";
import { ProjectsList } from "./ProjectsList/ProjectsList";

// dummy data for testing purposes
const data = [
  {
    id: 1,
    creation_date: "10.11.2022",
    status: "Активний",
    project_name: "Банджі джампінг",
  },
  {
    id: 2,
    creation_date: "01.09.2023",
    status: "Неактивний",
    project_name: "Кафе на даху",
  },
  {
    id: 3,
    creation_date: "15.06.2022",
    status: "Активний",
    project_name: "Доставка їжі на дронах",
  },
  {
    id: 4,
    creation_date: "22.03.2022",
    status: "Активний",
    project_name: "Віртуальні екскурсії",
  },
  {
    id: 5,
    creation_date: "30.08.2022",
    status: "Неактивний",
    project_name: "Магазин еко-продуктів",
  },
  {
    id: 6,
    creation_date: "18.07.2023",
    status: "Активний",
    project_name: "Сервіс каршерингу",
  },
  {
    id: 7,
    creation_date: "05.04.2021",
    status: "Неактивний",
    project_name: "Онлайн кінотеатр",
  },
];

export const AdminProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = data.filter((project) =>
    project.project_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className={styles.projects}>
      <AdminHeader
        isAdd={true}
        title="Проєкти"
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ProjectsList projects={filteredProjects} />
    </div>
  );
};
