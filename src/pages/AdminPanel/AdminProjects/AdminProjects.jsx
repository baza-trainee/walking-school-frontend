import { useState } from "react";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import { useGetAdminProjects } from "../../../hooks/useGetAdminProjects";
import { useDeleteAdminProjects } from "../../../hooks/useDeleteAdminProjects";
import DotsLoader from "../../../components/Loader/DotsLoader";
import styles from "./AdminPorjects.module.css";
import Alert from "../../../components/AdminPanel/Alert/Alert";
import ErrorModal from "../../../components/AdminPanel/ErrorModal/ErrorModal";

export const AdminProjects = () => {
  const { mutate, deleteError, deleteLoadingState } = useDeleteAdminProjects();
  const { setProjectsData, projectsData, isLoading } = useGetAdminProjects();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const filteredProjects = projectsData.filter((project) =>
    project.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const navigateToEdit = (projectId) => {
    const projectToEdit = projectsData.find((p) => p.id === projectId);
    navigate(`/admin/projects/edit/${projectId}`, { state: { projectToEdit } });
  };

  const handleSortByDate = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";

    setSortDirection(newSortDirection);

    const getComparableDate = (date) => {
      const [month, year] = date.split("-");
      return parseInt(year + month, 10);
    };

    setProjectsData((prev) =>
      [...prev].sort((a, b) => {
        const difference =
          getComparableDate(a.created) - getComparableDate(b.created);
        return newSortDirection === "asc" ? difference : -difference;
      }),
    );
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
      {isLoading || deleteLoadingState ? (
        <div className={styles.loader}>
          <DotsLoader />
        </div>
      ) : (
        <ProjectsList
          projects={filteredProjects}
          navigateToEdit={navigateToEdit}
          deleteFunc={() => setIsActiveModal(true)}
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
      {deleteError && <ErrorModal message={deleteError.message} />}
    </>
  );
};
