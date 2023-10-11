import { useState } from "react";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";

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
  const [projectsData, setProjectsData] = useState(data);
  const [sortDirection, setSortDirection] = useState("asc");
  const navigate = useNavigate();

  const filteredProjects = projectsData.filter((project) =>
    project.project_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const navigateToEdit = (projectId) => {
    navigate(`/admin/projects/edit/${projectId}`);
  };

  const handleSortByDate = () => {
    const getComparableDate = (date) => date.split(".").reverse().join("");

    setProjectsData((prev) =>
      [...prev].sort((a, b) => {
        const difference =
          getComparableDate(a.creation_date) -
          getComparableDate(b.creation_date);
        return sortDirection === "asc" ? difference : -difference;
      }),
    );

    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const deleteFunc = (projectId) => {
    // TODO: implement logic for deleting a project using projectId and backend endpoint
  };

  // TODO: use useEffect or useQuery with endpoints to get the projects from the server
  // TODO: use state to put the data into it.
  // TODO: replace dummy data with the state
  return (
    <>
      <AdminHeader
        heading={"Проєкти"}
        withButton
        withSearch
        searchWord={searchTerm}
        setSearchWord={setSearchTerm}
      />
      <ProjectsList
        projects={filteredProjects}
        navigateToEdit={navigateToEdit}
        deleteFunc={deleteFunc}
        handleSortByDate={handleSortByDate}
      />
    </>
  );
};
