import { AdminHeader } from "../../../../components/AdminPanel/AdminHeader/AdminHeader";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import styles from "./EditProject.module.css";

export const EditProject = () => {
  return (
    <div className={styles.wrapper}>
      <AdminHeader title={"Редагувати опис"} />
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
  );
};
