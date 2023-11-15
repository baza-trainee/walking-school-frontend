import React, { useState } from "react";
import styles from "../../../pages/AdminPanel/Contacts/Contacts.module.css";
import { Form, Formik } from "formik";
import { getContactData, updateContactData } from "../../../API/сontactAdmin";
import AdminInput from "../Input/AdminInput";
import AdminButton from "../UI/Button/AdminButton";
import { validationSchema } from "./validationSchema";
import { useMutation, useQuery } from "react-query";
import ErrorModal from "../ErrorModal/ErrorModal";
import Alert from "../Alert/Alert";
import SpinnerLoader from "../../Loader/SpinnerLoader";
import { formatPhoneNumber } from "../../../heplers/formatPhoneNumber";

const ContactsForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { data, error, isLoading } = useQuery("contacts", getContactData, {
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation(updateContactData, {
    onSuccess: () => {
      setIsSuccess(true);
    },
  });

  const phoneNumber =
    data?.phone.slice(0, 4) +
    " " +
    data?.phone.slice(4, 6) +
    " " +
    data?.phone.slice(6, 9) +
    " " +
    data?.phone.slice(9);
  const onSubmit = (data) => {
    mutation.mutate(data);
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

  const anyFieldTouched = (touched) => {
    return Object.values(touched).some((field) => field === true);
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          id: data?.id || null,
          phone: phoneNumber || "+380",
          contact_email: data?.contact_email || "",
          answer_email: data?.answer_email || "",
          facebook: data?.facebook || "",
          linkedin: data?.linkedin || "",
          telegram: data?.telegram || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { phone, ...rest } = values;
          const formattedPhone = phone?.replace(/\s/g, "");
          const data = { phone: formattedPhone, ...rest };
          onSubmit(data);
          setSubmitting(mutation.isLoading);
        }}
        validateOnChange={false}
        validateOnBlur={true}
        enableReinitialize={true}
      >
        {({
          values,
          resetForm,
          handleBlur,
          handleChange,
          errors,
          touched,
          isValid,
        }) => {
          const handleChangePhone = (e) => {
            const formatted = formatPhoneNumber(e.target.value);
            handleChange("phone")(formatted);
          };

          const handleCancel = () => {
            resetForm({
              values: {
                id: data?.id || null,
                phone: phoneNumber || "+380",
                contact_email: data?.contact_email || "",
                answer_email: data?.answer_email || "",
                facebook: data?.facebook || "",
                linkedin: data?.linkedin || "",
                telegram: data?.telegram || "",
              },
            });
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
                    onChange={(e) => handleChangePhone(e)}
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
              {mutation.isError && (
                <div>
                  <ErrorModal
                    message={`Не вдалось оновити данні: ${mutation.error.message}. Спробуйте пізніше`}
                  />
                </div>
              )}
              <div className={styles["form__fields-actions"]}>
                <AdminButton
                  type={"button"}
                  variant={"secondary"}
                  disabled={!isValid || !anyFieldTouched(touched)}
                  onClick={handleCancel}
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
      {isSuccess && (
        <Alert
          active={isSuccess}
          setActive={setIsSuccess}
          type="success"
          title="Збережено!"
          message="Ваші зміни успішно збережено"
        />
      )}
    </div>
  );
};

export default ContactsForm;
