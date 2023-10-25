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
import { useEffect } from "react";

export const AdminProjects = () => {
  const { mutate, error, deleteLoadingState } = useDeleteAdminProjects();
  const { setProjectsData, projectsData, isLoading } = useGetAdminProjects();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    if (error) {
      setDisplayError(true);
      const timerId = setTimeout(() => {
        setDisplayError(false);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [error]);

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
      {displayError && <ErrorModal message={error.message} />}
    </>
  );
};
