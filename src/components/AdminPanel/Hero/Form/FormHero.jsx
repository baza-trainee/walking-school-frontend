import React from "react";
import { Form, Formik } from "formik";
import styles from "./FormHero.module.css";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";
import { useEditHeroAdmin } from "../../../../hooks/useEditHeroAdmin";
import { usePostHeroAdmin } from "../../../../hooks/usePostHeroAdmin";
import { useGetHeroById } from "../../../../hooks/useGetHeroById";
import { heroValidation } from "../../../../pages/AdminPanel/HeroAdmin/heroValidation";
import SpinnerLoader from "../../../Loader/SpinnerLoader";
import FormFields from "./FormFields";

const FormHero = ({ id }) => {
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
          console.log("data", data);
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
      }) => {
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
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormHero;
