import styles from "./ProjectItem.module.css";
import edit from "../../../../assets/images/edit.svg";
import deleteIcon from "../../../../assets/images/delete.svg";
import { useNavigate } from "react-router";

export const ProjectItem = ({ project, isHeader = false }) => {
  const navigate = useNavigate();

  const handleEdit = (projectId) => {
    // TODO: logic to handle edit will go here
    navigate(`/admin/projects/edit/${projectId}`);
  };
  const handleDelete = (projectId) => {
    // TODO: logic to handle delete will go here
    console.log(`Prepare to delete project with id: ${projectId}`);
  };

  const { status, project_name, creation_date } = project || {};
  return (
    <div
      className={`${styles.projectItem} ${
        isHeader ? styles.projectItemBg : ""
      }`}
    >
      <div className={styles.nameContainer}>
        <input
          type="checkbox"
          className={`${styles.input} ${isHeader ? styles.hidden : ""}`}
        />
        <p className={`${styles.project_name}`}>
          {isHeader ? "Назва" : project_name}
        </p>
      </div>

      <p className={styles.status}>{isHeader ? "Стан" : status}</p>

      <p
        className={`${styles.creation_date} ${
          isHeader && styles.creation_date_icon
        }`}
      >
        {isHeader ? "Дата Додавання" : creation_date}
      </p>

      <div
        className={`${styles.iconsContainer} ${isHeader ? styles.hidden : ""}`}
      >
        <img
          src={edit}
          alt="edit"
          className={styles.image}
          onClick={() => handleEdit(project.id)}
        />
        <img
          src={deleteIcon}
          alt="delete"
          className={styles.image}
          onClick={() => handleDelete(project.id)}
        />
      </div>
    </div>
  );
};
