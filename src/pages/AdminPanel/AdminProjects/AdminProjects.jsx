import { useState } from "react";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import { useGetAdminProjects } from "../../../hooks/useGetAdminProjects";
import { useDeleteAdminProjects } from "../../../hooks/useDeleteAdminProjects";

export const AdminProjects = () => {
  const { setProjectsData, projectsData, isLoading } = useGetAdminProjects();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const navigate = useNavigate();

  const { mutate } = useDeleteAdminProjects();

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
    mutate(projectId);
  };

  const navigateToAddProject = () => {
    navigate(`/admin/projects/add`);
  };

  return (
    <>
      <AdminHeader
        heading={"Проєкти"}
        withButton
        withSearch
        searchWord={searchTerm}
        setSearchWord={setSearchTerm}
        buttonFunc={navigateToAddProject}
      />
      {isLoading ? (
        <div style={{ padding: "35px 80px 35px 20px" }}>Loading...</div>
      ) : (
        <ProjectsList
          projects={filteredProjects}
          navigateToEdit={navigateToEdit}
          deleteFunc={deleteFunc}
          handleSortByDate={handleSortByDate}
        />
      )}
    </>
  );
};
