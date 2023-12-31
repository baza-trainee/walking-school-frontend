import React, { useState } from "react";
import { Form, Formik } from "formik";
import styles from "./FormHero.module.css";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";
import { useEditHeroAdmin } from "../../../../hooks/useEditHeroAdmin";
import { usePostHeroAdmin } from "../../../../hooks/usePostHeroAdmin";
import { useGetHeroById } from "../../../../hooks/useGetHeroById";
import { heroValidation } from "../../../../pages/AdminPanel/HeroAdmin/heroValidation";
import SpinnerLoader from "../../../Loader/SpinnerLoader";
import FormFields from "./FormFields";
import ErrorModal from "../../ErrorModal/ErrorModal";

const FormHero = ({ id }) => {
  const { hero, error, isLoading } = useGetHeroById(id);
  const { edit, isEditSuccess, setIsEditSuccess } = useEditHeroAdmin();
  const { post, isPostSuccess, setIsPostSuccess } = usePostHeroAdmin();
  const [resetPreviewImg, setResetPreviewImg] = useState(false);

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

  if (error) {
    return (
      <ErrorModal
        message={`Не вдалось завантажити данні: ${error.message}. Спробуйте будь ласка пізніше.`}
        className={styles.centered}
      />
    );
  }

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
        } else {
          const { id, image, ...rest } = values;
          const formattedImage = await blobUrlToBase64(image);
          const data = { image: formattedImage, ...rest };
          onSubmit(data, "post");
        }
      }}
      validateOnChange={false}
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
        setFieldTouched,
        resetForm,
      }) => {
        const handleCancel = () => {
          resetForm({
            values: {
              id: hero?.id || null,
              title: hero?.title || "",
              description: hero?.description || "",
              image: hero?.image || "",
            },
          });
          setResetPreviewImg(true);
        };

        return (
          <Form>
            <FormFields
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              isValid={isValid}
              id={id}
              isPostSuccess={isPostSuccess}
              isEditSuccess={isEditSuccess}
              setIsPostSuccess={setIsPostSuccess}
              setIsEditSuccess={setIsEditSuccess}
              post={post}
              edit={edit}
              handleCancel={handleCancel}
              resetForm={resetForm}
              resetPreviewImg={resetPreviewImg}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormHero;
