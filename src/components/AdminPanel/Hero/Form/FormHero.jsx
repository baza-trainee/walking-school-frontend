import React, { useState } from "react";
import { Form, Formik } from "formik";
import AdminInput from "../../Input/AdminInput";
import styles from "./FormHero.module.css";
import ImageInput from "../../ImageInput/ImageInput";
import * as Yup from "yup";
import {
  imageValidation,
  subtitleValidation,
  titleValidation,
} from "../../../../validationSchemas/validationSchema";
import { ReactComponent as Close } from "../../../../assets/admin/common/close.svg";
import AdminButton from "../../UI/Button/AdminButton";
import Alert from "../../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postHero, putHero } from "../../../../API/hero";

const FormHero = ({ title, subtitle, image, id, submitFunc }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const validationSchema = Yup.object({
    title: titleValidation,
    subtitle: subtitleValidation,
    image: imageValidation,
  });
  const anyFieldTouched = (touched) => {
    return Object.values(touched).some((field) => field === true);
  };

  return (
    <Formik
      initialValues={{
        title: title || "",
        subtitle: subtitle || "",
        image: image || "",
      }}
      validationSchema={validationSchema}
      onSubmit={submitFunc}
      validateOnChange={true}
      validateOnBlur={true}
      enableReinitialize={true}
    >
      {({
        values,
        handleBlur,
        handleSubmit,
        touched,
        handleChange,
        errors,
        isValid,
        setFieldValue,
      }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className={styles.wrapper}>
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
