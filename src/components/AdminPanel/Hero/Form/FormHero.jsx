import React, { useState } from "react";
import { Form, Formik } from "formik";
import AdminInput from "../../Input/AdminInput";
import styles from "./FormHero.module.css";
import ImageInput from "../../ImageInput/ImageInput";
import { ReactComponent as Close } from "../../../../assets/admin/common/close.svg";
import AdminButton from "../../UI/Button/AdminButton";
import Alert from "../../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { heroValidation } from "../../../../pages/AdminPanel/HeroAdmin/heroValidation";
import { anyFieldTouched } from "../../../../heplers/anyFieldTouched";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";
import ErrorModal from "../../ErrorModal/ErrorModal";
import { useGetHeroById } from "../../../../hooks/useGetHeroById";
import SpinnerLoader from "../../../Loader/SpinnerLoader";
import { useEditHeroAdmin } from "../../../../hooks/useEditHeroAdmin";
import { usePostHeroAdmin } from "../../../../hooks/usePostHeroAdmin";

const FormHero = ({ id }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { hero, error, isLoading } = useGetHeroById(id);
  const { edit, isEditSuccess, setIsEditSuccess } = useEditHeroAdmin();
  const { post, isPostSuccess, setIsPostSuccess } = usePostHeroAdmin();

  const onSubmit = (data, type) => {
    if (type === "post") {
      post.mutate(data);
    } else {
      edit.mutate(data);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.centered}>
        <SpinnerLoader />
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <ErrorModal
  //       message={`Не вдалось завантажити данні: ${error.message}. Спробуйте будь ласка пізніше.`}
  //       className={styles.centered}
  //     />
  //   );
  // }

  return (
    <Formik
      initialValues={{
        id: hero?.id || null,
        title: hero?.title || "",
        description: hero?.description || "",
        image: hero?.image || "",
      }}
      validationSchema={heroValidation}
      onSubmit={async (values, { setSubmitting }) => {
        if (id) {
          const { image, ...rest } = values;
          const formattedImage = await blobUrlToBase64(image);
          const data = { image: formattedImage, ...rest };
          onSubmit(data, "edit");
          setSubmitting(edit.isLoading);
        } else {
          const { id, image, ...rest } = values;
          const formattedImage = await blobUrlToBase64(image);
          const data = { image: formattedImage, ...rest };
          onSubmit(data, "post");
          setSubmitting(post.isLoading);
        }
      }}
      validateOnChange={true}
      validateOnBlur={true}
      enableReinitialize={true}
    >
      {({
        values,
        handleBlur,
        touched,
        handleChange,
        errors,
        isValid,
        setFieldValue,
      }) => (
        <Form>
          <div className={styles.wrapper}>
            {(isPostSuccess || isEditSuccess) && (
              <Alert
                active={isPostSuccess || isEditSuccess}
                setActive={(value) => {
                  if (isPostSuccess) {
                    setIsPostSuccess(value);
                  } else {
                    setIsEditSuccess(value);
                  }
                }}
                type="success"
                title="Збережено!"
                message="Ваші зміни успішно збережено"
              />
            )}
            <div className={styles.data}>
              <div style={{ height: "68px", width: "737px" }}>
                <AdminInput
                  id={"title"}
                  value={values.title}
                  variant={"admin"}
                  error={touched.title ? errors.title : ""}
                  onBlur={handleBlur}
                  name={"title"}
                  onChange={handleChange}
                  placeholder={"Заголовок"}
                  type={"text"}
                  icon={id ? <Close /> : ""}
                />
              </div>
              <div style={{ height: "236px", width: "737px" }}>
                <AdminInput
                  id={"description"}
                  value={values.description}
                  variant={"textarea"}
                  error={touched.description ? errors.description : ""}
                  name={"description"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={"Підзаголовок"}
                  type={"text"}
                  icon={id ? <Close /> : ""}
                />
              </div>

              <ImageInput
                variant={"slide"}
                id={"image"}
                name={"image"}
                onChange={(img) => setFieldValue("image", img)}
                error={touched.image ? errors.image : ""}
                src={hero?.image || ""}
              />
            </div>
            {(post.isError || edit.isError) && (
              <div>
                <ErrorModal
                  message={`Не вдалось оновити данні. Спробуйте пізніше`}
                />
              </div>
            )}
            <div className={styles.buttons}>
              <AdminButton
                variant={"secondary"}
                onClick={() => {
                  if (id) setIsOpen(true);
                }}
                disabled={!isValid || !anyFieldTouched(touched)}
              >
                Скасувати
              </AdminButton>
              <AdminButton
                variant={"primary"}
                type={"submit"}
                disabled={!isValid || !anyFieldTouched(touched)}
              >
                Додати
              </AdminButton>
            </div>
          </div>

          {isOpen && (
            <Alert
              title={"Скасувати зміни"}
              message={
                "Ви дійсно хочете скасувати зміни? Вони не будуть збережені"
              }
              setActive={setIsOpen}
              active={isOpen}
              successFnc={() => navigate(-1)}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormHero;
