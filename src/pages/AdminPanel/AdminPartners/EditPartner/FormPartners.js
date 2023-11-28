import React, { useState } from "react";
import { useEditPartner } from "../../../../hooks/useEditPartner";
import { Form, Formik } from "formik";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";
import * as Yup from "yup";
import {
  imageValidation,
  titleValidation,
} from "../../../../validationSchemas/validationSchema";
import PartnerFormFields from "./PartnerFormFields";
import { useGetPartnerById } from "../../../../hooks/useGetPartnerById";
import SpinnerLoader from "../../../../components/Loader/SpinnerLoader";
import ErrorModal from "../../../../components/AdminPanel/ErrorModal/ErrorModal";
import style from "./EditPartner.module.css";

const FormPartners = ({ id }) => {
  const [resetPreviewImg, setResetPreviewImg] = useState(false);
  const { partner, error, isLoading } = useGetPartnerById(id);
  const { edit, isEditSuccess, setIsEditSuccess } = useEditPartner();

  const validation = Yup.object({
    title: titleValidation,
    image: imageValidation,
  });

  const onSubmit = (data) => {
    edit.mutate(data);
  };
  if (isLoading) {
    return (
      <div className={style.centered}>
        <SpinnerLoader />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorModal
        message={`Не вдалось завантажити данні: ${error.message}. Спробуйте будь ласка пізніше.`}
        className={style.centered}
      />
    );
  }

  return (
    <Formik
      initialValues={{
        id: partner?.id || null,
        title: partner?.title || "",
        created: partner?.created || "",
        image: partner?.image || "",
      }}
      validationSchema={validation}
      onSubmit={async (values) => {
        if (id) {
          const { image, ...rest } = values;
          const formattedImage = await blobUrlToBase64(image);
          const data = { image: formattedImage, ...rest };
          onSubmit(data);
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
              id: partner?.id || null,
              title: partner?.title || "",
              created: partner?.created || "",
              image: partner?.image || "",
            },
          });
          setResetPreviewImg(true);
        };

        return (
          <Form>
            <PartnerFormFields
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              isValid={isValid}
              isEditSuccess={isEditSuccess}
              setIsEditSuccess={setIsEditSuccess}
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

export default FormPartners;
