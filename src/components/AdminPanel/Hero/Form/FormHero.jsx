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
import { useMutation } from "react-query";
import { editHero, postHero } from "../../../../API/heroAPI";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";

const FormHero = ({ title, subtitle, image, id }) => {
  const navigate = useNavigate();
  const [isPostSuccess, setIsPostSuccess] = useState(true);
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const mutationPost = useMutation(postHero, {
    onSuccess: () => {
      setIsPostSuccess(true);
    },
  });

  const mutationEdit = useMutation(editHero, {
    onSuccess: () => {
      setIsEditSuccess(true);
    },
  });

  const onSubmit = (data, type) => {
    if (type === "post") {
      mutationPost.mutate(data);
    } else {
      mutationEdit.mutate(data);
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className={styles.centered}>
  //       <SpinnerLoader />
  //     </div>
  //   );
  // }

  return (
    <Formik
      initialValues={{
        title: title || "",
        subtitle: subtitle || "",
        image: image || "",
      }}
      validationSchema={heroValidation}
      onSubmit={async (values, { setSubmitting }) => {
        const { image, ...rest } = values;
        const formattedImage = await blobUrlToBase64(image);

        const data = { image: formattedImage, ...rest };

        onSubmit(data, "post");
        setSubmitting(mutationPost.isLoading);
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
                  id={"subtitle"}
                  value={values.subtitle}
                  variant={"textarea"}
                  error={touched.subtitle ? errors.subtitle : ""}
                  name={"subtitle"}
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
                src={image}
              />
            </div>
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
