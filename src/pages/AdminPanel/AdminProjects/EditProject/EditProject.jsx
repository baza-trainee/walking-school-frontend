import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import styles from "./EditProject.module.css";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import { useGetProjectsDescription } from "../../../../hooks/useGetProjectsDescription";
import ErrorModal from "../../../../components/AdminPanel/ErrorModal/ErrorModal";
import { useUpdateProjectDescription } from "../../../../hooks/useUpdateProjectDescription";
import DotsLoader from "../../../../components/Loader/DotsLoader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../../../components/AdminPanel/Alert/Alert";

export const EditProject = () => {
  const { data, localError } = useGetProjectsDescription();
  const { updateError, formik, isLoading } = useUpdateProjectDescription(data);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const navigate = useNavigate();

  const onCancelFunc = () => {
    setIsActiveModal(true);
  };

  const navigateToProjects = () => {
    navigate(`/admin/projects`);
  };

  return (
    <div>
      <AdminHeader heading={"Редагувати опис"} withClose={true} />
      {isLoading ? (
        <DotsLoader />
      ) : (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
          <AdminInput
            disabled
            variant="admin"
            placeholder="Проєкти"
            className={styles.input}
          />
          <AdminInput
            name="description"
            placeholder="7-150 знаків"
            className={styles.textArea}
            onChange={formik.handleChange}
            value={formik.values.description}
            error={formik.touched.description && formik.errors.description}
          />
          <div className={styles.buttonWrapper}>
            <AdminButton
              variant="secondary"
              children={"Скасувати"}
              type="button"
              onClick={onCancelFunc}
            />
            <AdminButton
              variant="primary"
              children={"Зберегти"}
              type="submit"
            />
          </div>
        </form>
      )}

      <Alert
        title={"Ви дійсно хочете призупинити процес?"}
        active={isActiveModal}
        setActive={setIsActiveModal}
        successFnc={navigateToProjects}
      />

      {localError && <ErrorModal message={localError.message} />}
      {updateError && <ErrorModal message={updateError.message} />}
    </div>
  );
};
