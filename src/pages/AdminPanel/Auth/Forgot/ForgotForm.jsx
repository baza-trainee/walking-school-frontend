import React, { useState } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import styles from "./Forgot.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Close } from "../../../../assets/admin/close.svg";

const ForgotForm = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [isSent, setIsSent] = useState(true);
  const validationSchema = Yup.object({
    email: Yup.string()
      .test("domain", "Корабель там 🖕", (value) => {
        return !value?.endsWith(".ru") && !value?.endsWith(".by");
      })
      .matches(
        /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Введіть дійсний email",
      )
      .required("Введіть дійсний email"),
  });

  return (
    <div className={styles.wrapper} {...props}>
      <h1>Забули пароль</h1>
      <p className={styles.text}>Вкажіть ваш email, щоб підтвердити особу </p>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setIsSent(true);
          } catch (e) {
            console.log(e);
          } finally {
            setSubmitting(false);
          }
          resetForm();
        }}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {({ values, handleBlur, handleChange, errors, touched, isValid }) => (
          <Form className={styles.login__form}>
            <div className={styles["login__form-input"]}>
              <AdminInput
                id="email"
                name={"email"}
                type={"text"}
                variant={"login"}
                label={"Електронна пошта"}
                placeholder={"Введіть електронну пошту"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email ? errors.email : null}
              />
            </div>
            <div className={styles.submit}>
              <AdminButton
                variant={"secondary"}
                onClick={() => navigate("/login")}
              >
                Скасувати
              </AdminButton>
              <AdminButton
                type={"submit"}
                variant={"primary"}
                disabled={!isValid || !touched.email}
                icon={false}
              >
                Підтвердити
              </AdminButton>
            </div>
          </Form>
        )}
      </Formik>
      {isSent && (
        <div className={styles.message}>
          <div className={styles.close}>
            <Close />
          </div>
          Перейдіть за посиланням, відправленим у листі на Вашу пошту
        </div>
      )}
    </div>
  );
};

export default ForgotForm;
