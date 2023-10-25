import React from "react";
import styles from "../../../pages/AdminPanel/Contacts/Contacts.module.css";
import { Form, Formik } from "formik";
import { getContactData, updateContactData } from "../../../API/сontactAdmin";
import { formatPhoneNumber } from "../../../heplers/formatPhoneNumber";
import AdminInput from "../Input/AdminInput";
import AdminButton from "../UI/Button/AdminButton";
import { validationSchema } from "./validationSchema";
import { useQuery } from "react-query";

const ContactsForm = () => {
  const { data, error, isLoading } = useQuery("contacts", getContactData);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }
  const anyFieldTouched = (touched) => {
    return Object.values(touched).some((field) => field === true);
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          phone: data?.phone || "+380",
          contact_email: data?.contact_email || "",
          answer_email: data?.answer_email || "",
          facebook: data?.facebook || "",
          linkedin: data?.linkedin || "",
          telegram: data?.telegram || "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const { phone, ...rest } = values;
            const formattedPhone = phone.replace(/\s/g, "");

            const data = { phone: formattedPhone, ...rest };
            await updateContactData(data);
            resetForm();
          } catch (e) {
            alert(`Помилка при оновленні контактних даних: ${e.message}`);
          } finally {
            setSubmitting(false);
          }
        }}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {({ values, handleBlur, handleChange, errors, touched, isValid }) => {
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
                    id="contact_email"
                    name={"contact_email"}
                    type="text"
                    variant={"admin"}
                    value={values.contact_email}
                    onChange={handleChange}
                    error={
                      errors.contact_email && touched.contact_email
                        ? errors.contact_email
                        : undefined
                    }
                    onBlur={handleBlur}
                    placeholder={"Контактний email"}
                  />
                </div>
                <div className={styles["form__fields-input"]}>
                  <AdminInput
                    id="answer_email"
                    name={"answer_email"}
                    type="text"
                    variant={"admin"}
                    value={values.answer_email}
                    onChange={handleChange}
                    error={
                      errors.answer_email && touched.answer_email
                        ? errors.answer_email
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
  );
};

export default ContactsForm;
