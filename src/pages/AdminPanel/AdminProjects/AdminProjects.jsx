import { useState } from "react";
import styles from "./AdminProjects.module.css";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";

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
  // TODO: use useEffect or useQuery with endpoints to get the projects from the server
  // TODO: use state to put the data into it.
  // TODO: replace dummy data with the state

  const filteredProjects = data.filter((project) =>
    project.project_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className={styles.projects}>
      <AdminHeader
        heading={"Проєкти"}
        withButton={true}
        withSearch={true}
        setSearchTerm={setSearchTerm}
      />
      <ProjectsList projects={filteredProjects} />
    </div>
  );
};
