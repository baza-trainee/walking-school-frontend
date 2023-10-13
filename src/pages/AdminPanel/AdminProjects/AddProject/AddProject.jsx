import { CustomSelect } from "../../../../components/AdminPanel/Filters/CustomSelect/CustomSelect";
import { DateSelect } from "../../../../components/AdminPanel/Filters/DateSelect/DateSelect";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./AddProject.module.css";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import { ageOptions, eventOptions } from "../optionsData";
import { useParams } from "react-router";
import { useProjectForm } from "../../../../hooks/useProjectForm";

export const AddProject = () => {
  const { id } = useParams();
  const { formik } = useProjectForm(id);

  return (
    <>
      <AdminHeader heading={"Додати проєкт"} withClose={true} />
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
            <div className={styles.tooltipContainer}>
              <DateSelect
                placeholder={"Дата публікації"}
                onChange={(date) => formik.setFieldValue("publishDate", date)}
                id={"publishDate"}
                error={formik.touched.publishDate && formik.errors.publishDate}
              />
              <Tooltip />
            </div>
            <div className={styles.buttonWrapper}>
              <AdminButton variant="secondary" children={"Скасувати"} />
              <AdminButton
                type="submit"
                variant="primary"
                children={"Зберегти"}
              />
            </div>
          </div>
          <div className={styles.rightBlock}>
            <DateSelect
              placeholder={"Період"}
              onChange={(date) => formik.setFieldValue("eventDate", date)}
              id={"eventDate"}
              error={formik.touched.eventDate && formik.errors.eventDate}
            />
            <CustomSelect
              options={eventOptions}
              onChange={(option) => formik.setFieldValue("category", option)}
              error={formik.touched.category && formik.errors.category}
            />
            <CustomSelect
              options={ageOptions}
              onChange={(option) => formik.setFieldValue("ageLimit", option)}
              placeholder="Вікові обмеження"
              selectPrompt="Оберіть вік"
              error={formik.touched.ageLimit && formik.errors.ageLimit}
            />
            <ImageInput
              variant="project"
              onChange={(blob) => formik.setFieldValue("image", blob)}
              src={null}
              error={formik.touched.image && formik.errors.image}
            />
          </div>
        </div>
      </form>
    </>
  );
};
