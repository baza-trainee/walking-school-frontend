import styles from "./ProjectItem.module.css";
import edit from "../../../../assets/images/edit.svg";
import deleteIcon from "../../../../assets/images/delete.svg";

export const ProjectItem = ({ project }) => {
  const { status, project_name, creation_date } = project;
  return (
    <div className={styles.projectItem}>
      <div className={styles.nameContainer}>
        <input type="checkbox" className={styles.input} />
        <p className={styles.project_name}>{project_name}</p>
      </div>

      <p className={styles.status}>{status}</p>
      <p className={styles.creation_date}>{creation_date}</p>
      <div className={styles.iconsContainer}>
        <img src={edit} alt="edit" className={styles.edit} />
        <img src={deleteIcon} alt="delete" className={styles.deleteIcon} />
      </div>
    </div>
  );
};
