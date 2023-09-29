import React from "react";
import styles from "./Contacts.module.css";
import { Form, Formik } from "formik";
import AdminInput from "../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../components/AdminPanel/UI/Button/AdminButton";
import * as Yup from "yup";
import {
  emailValidationSchema,
  phoneValidationSchema,
  telegramValidationSchema,
  urlsValidationSchema,
} from "../../../validationSchemas/validationSchema";

const Contacts = () => {
  const anyFieldTouched = (touched) => {
    return Object.values(touched).some((field) => field === true);
  };

  const validationSchema = Yup.object({
    phone: phoneValidationSchema,
    contactEmail: emailValidationSchema,
    feedbackEmail: emailValidationSchema,
    facebook: urlsValidationSchema,
    linkedin: urlsValidationSchema,
    telegram: telegramValidationSchema,
  });
  const formatPhoneNumber = (value) => {
    if (!value) return value;

    // Remove all non-digit characters
    const cleaned = ("" + value).replace(/\D/g, "");

    // Match groups of digits
    const match = cleaned.match(/^(\d{1,3})(\d{0,2})(\d{0,3})(\d{0,4})$/);

    if (match) {
      const intlCode = match[1].length >= 3 ? "+" : "";
      return [intlCode + match[1], match[2], match[3], match[4]]
        .filter(Boolean)
        .join(" ");
    }

    return value;
  };

  return (
    <div>
      <div style={{ height: "118px", display: "flex", alignItems: "flex-end" }}>
        <h1>Редагувати контакти</h1>
      </div>
      <div className={styles.container}>
        <Formik
          initialValues={{
            phone: "+380",
            contactEmail: "",
            feedbackEmail: "",
            facebook: "",
            linkedin: "",
            telegram: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            resetForm();
          }}
          validateOnChange={false}
          validateOnBlur={true}
        >
          {({ values, handleBlur, handleChange, errors, touched, isValid }) => {
            console.log(values);
            const handleChangePhone = (e) => {
              const formatted = formatPhoneNumber(e.target.value);
              handleChange("phone")(formatted);
            };
            return (
              <Form className={styles.form}>
                <div className={styles["form__fields"]}>
                  <div className={styles["form__fields-input"]}>
                    <AdminInput
                      id="phone"
                      name={"phone"}
                      type="text"
                      variant={"admin"}
                      value={values.phone}
                      onChange={handleChangePhone}
                      error={
                        errors.phone && touched.phone ? errors.phone : undefined
                      }
                      onBlur={handleBlur}
                      placeholder={"Телефон"}
                    />
                  </div>
                  <div className={styles["form__fields-input"]}>
                    <AdminInput
                      id="contactEmail"
                      name={"contactEmail"}
                      type="text"
                      variant={"admin"}
                      value={values.contactEmail}
                      onChange={handleChange}
                      error={
                        errors.contactEmail && touched.contactEmail
                          ? errors.contactEmail
                          : undefined
                      }
                      onBlur={handleBlur}
                      placeholder={"Контактний email"}
                    />
                  </div>
                  <div className={styles["form__fields-input"]}>
                    <AdminInput
                      id="feedbackEmail"
                      name={"feedbackEmail"}
                      type="text"
                      variant={"admin"}
                      value={values.feedbackEmail}
                      onChange={handleChange}
                      error={
                        errors.feedbackEmail && touched.feedbackEmail
                          ? errors.feedbackEmail
                          : undefined
                      }
                      onBlur={handleBlur}
                      placeholder={
                        "e-mail для обробки звернень через форму зворотнього зв’язку"
                      }
                    />
                  </div>
                  <div className={styles["form__fields-input"]}>
                    <AdminInput
                      id="facebook"
                      name={"facebook"}
                      type="text"
                      variant={"admin"}
                      value={values.facebook}
                      onChange={handleChange}
                      error={
                        errors.facebook && touched.facebook
                          ? errors.facebook
                          : undefined
                      }
                      onBlur={handleBlur}
                      placeholder={"Facebook"}
                    />
                  </div>
                  <div className={styles["form__fields-input"]}>
                    <AdminInput
                      id="linkedin"
                      name={"linkedin"}
                      type="text"
                      variant={"admin"}
                      value={values.linkedin}
                      onChange={handleChange}
                      error={
                        errors.linkedin && touched.linkedin
                          ? errors.linkedin
                          : undefined
                      }
                      onBlur={handleBlur}
                      placeholder={"Linkedin"}
                    />
                  </div>
                  <div className={styles["form__fields-input"]}>
                    <AdminInput
                      id="telegram"
                      name={"telegram"}
                      type="text"
                      variant={"admin"}
                      value={values.telegram}
                      onChange={handleChange}
                      error={
                        errors.telegram && touched.telegram
                          ? errors.telegram
                          : undefined
                      }
                      onBlur={handleBlur}
                      placeholder={"Telegram"}
                    />
                  </div>
                </div>
                <div className={styles["form__fields-actions"]}>
                  <AdminButton
                    variant={"secondary"}
                    disabled={!isValid || !anyFieldTouched(touched)}
                  >
                    Скасувати
                  </AdminButton>
                  <AdminButton
                    type={"submit"}
                    variant={"primary"}
                    disabled={!isValid || !anyFieldTouched(touched)}
                  >
                    Зберегти
                  </AdminButton>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Contacts;
