import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import styles from "./EditProject.module.css";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";

export const EditProject = () => {
  return (
    <div>
      <AdminHeader heading={"Редагувати опис"} withClose={true} />
      <div className={styles.wrapper}>
        <AdminInput
          disabled
          variant="admin"
          placeholder="Проєкти"
          className={styles.input}
        />
        <AdminInput
          disabled
          placeholder="7-150 знаків"
          className={styles.textArea}
        />
        <div className={styles.buttonWrapper}>
          <AdminButton variant="secondary" children={"Скасувати"} />
          <AdminButton variant="primary" children={"Зберегти"} />
        </div>
      </div>
    </div>
  );
};
