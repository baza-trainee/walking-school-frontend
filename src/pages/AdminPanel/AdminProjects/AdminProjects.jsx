import { useState } from "react";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import { useGetAdminProjects } from "../../../hooks/useGetAdminProjects";
import { useDeleteAdminProjects } from "../../../hooks/useDeleteAdminProjects";
import DotsLoader from "../../../components/Loader/DotsLoader";
import styles from "./AdminPorjects.module.css";
import Alert from "../../../components/AdminPanel/Alert/Alert";

export const AdminProjects = () => {
  const { setProjectsData, projectsData, isLoading } = useGetAdminProjects();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const deleteFunc = () => {
    setIsActiveModal(true);
  };

  const deleteOnConfirm = () => {
    mutate(selectedProject);
    setSelectedProject(null);
    setIsActiveModal(false);
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
        <div className={styles.loader}>
          <DotsLoader />
        </div>
      ) : (
        <ProjectsList
          projects={filteredProjects}
          navigateToEdit={navigateToEdit}
          deleteFunc={deleteFunc}
          handleSortByDate={handleSortByDate}
          setSelectedProject={setSelectedProject}
        />
      )}
      <Alert
        title={"Ви дійсно хочете видалити проєкт?"}
        active={isActiveModal}
        setActive={setIsActiveModal}
        successFnc={deleteOnConfirm}
      />
    </>
  );
};
