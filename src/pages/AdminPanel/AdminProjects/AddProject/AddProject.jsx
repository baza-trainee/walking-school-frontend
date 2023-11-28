import { CustomSelect } from "../../../../components/AdminPanel/Filters/CustomSelect/CustomSelect";
import { DateSelect } from "../../../../components/AdminPanel/Filters/DateSelect/DateSelect";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import styles from "./AddProject.module.css";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import { ageOptions, eventOptions } from "../optionsData";
import { useLocation, useParams } from "react-router";
import { useProjectForm } from "../../../../hooks/useProjectForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "../../../../components/AdminPanel/Alert/Alert";
import ErrorModal from "../../../../components/AdminPanel/ErrorModal/ErrorModal";
import DotsLoader from "../../../../components/Loader/DotsLoader";
import Success from "../../../../components/AdminPanel/Alert/Success";

export const AddProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const project = location.state?.projectToEdit || null;
  const [isActiveModal, setIsActiveModal] = useState(false);
  const {
    formik,
    mutationStatus,
    localError,
    isLoading,
    showSuccess,
    setShowSuccess,
  } = useProjectForm(id, project);

  const navigateToProjects = () => {
    navigate(`/admin/projects`);
  };

  const onCancelFunc = () => {
    setIsActiveModal(true);
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <AdminHeader
        heading={project ? "Редагувати проєкт" : "Додати проєкт"}
        withClose={true}
        closeFunc={navigateToProjects}
      />
      {isLoading ? (
        <DotsLoader />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.content}>
            <div className={styles.leftBlock}>
              <AdminInput
                name="title"
                variant="admin"
                placeholder="Заголовок"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.touched.title && formik.errors.title}
              />
              <AdminInput
                name="link"
                variant="admin"
                placeholder="Додайте посилання"
                onChange={formik.handleChange}
                value={formik.values.link}
                error={formik.touched.link && formik.errors.link}
              />
              <AdminInput
                name="description"
                variant="textarea"
                placeholder="Опис"
                onChange={formik.handleChange}
                value={formik.values.description}
                error={formik.touched.description && formik.errors.description}
              />
              <div className={styles.buttonWrapper}>
                <AdminButton
                  type="button"
                  variant="secondary"
                  children={"Скасувати"}
                  onClick={onCancelFunc}
                  disabled={mutationStatus}
                />
                <AdminButton
                  type="submit"
                  variant="primary"
                  children={"Зберегти"}
                  disabled={mutationStatus}
                />
              </div>
            </div>
            <div className={styles.rightBlock}>
              <DateSelect
                placeholder={project?.period?.join(" - ") || "Період"}
                onChange={(date) => formik.setFieldValue("period", date)}
                id={"period"}
                error={formik.touched.period && formik.errors.period}
              />
              <CustomSelect
                options={eventOptions}
                onChange={(option) => formik.setFieldValue("category", option)}
                error={formik.touched.category && formik.errors.category}
                value={formik.values.category}
              />
              <CustomSelect
                options={ageOptions}
                onChange={(option) =>
                  formik.setFieldValue("age_category", option)
                }
                placeholder="Вікові обмеження"
                selectPrompt="Оберіть вік"
                error={
                  formik.touched.age_category && formik.errors.age_category
                }
                value={formik.values.age_category}
              />
              <ImageInput
                variant="project"
                onChange={(blob) => formik.setFieldValue("image", blob)}
                src={project?.image || null}
                error={formik.touched.image && formik.errors.image}
                handleClear={() => formik.setFieldValue("image", "")}
              />
            </div>
          </div>
        </form>
      )}

      {showSuccess && (
        <Success
          title="Success"
          message="Операція успішна"
          closeModal={closeSuccessMessage}
        />
      )}

      <Alert
        title={"Ви дійсно хочете призупинити процес?"}
        active={isActiveModal}
        setActive={setIsActiveModal}
        successFnc={navigateToProjects}
      />
      {localError && <ErrorModal message={localError.message} />}
    </>
  );
};
