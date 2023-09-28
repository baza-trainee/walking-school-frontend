import React from "react";
import styles from "./Login.module.css";
import { Form, Formik } from "formik";
import AdminInput from "../../../components/AdminPanel/Input/AdminInput";
import * as Yup from "yup";
import { ReactComponent as Eye } from "../../../assets/admin/eye.svg";
import { NavLink } from "react-router-dom";
import AdminButton from "../../../components/AdminPanel/UI/Button/AdminButton";

const LoginFrom = ({ className = "", ...props }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Невірний формат електронної пошти")
      .required("Поле є обов'язковим"),
    password: Yup.string()
      .min(8, "Пароль повинен мати не менше 8 символів")
      .required("Поле є обов'язковим"),
  });

  return (
    <div className={styles.wrapper + className} {...props}>
      <h1>Вхід</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
          } catch (e) {
          } finally {
            setSubmitting(false);
          }
          resetForm();
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ values, handleBlur, handleChange, errors, touched, isValid }) => (
          <Form className={styles.login__form}>
            <AdminInput
              name={"email"}
              type="text"
              variant={"login"}
              label={"Логін"}
              value={values.email}
            />
            <AdminInput
              name={"password"}
              type={"password"}
              variant={"login"}
              placeholder={"Введіть пароль"}
              icon={<Eye />}
              label={"Пароль"}
              value={values.password}
            />
            <NavLink className={styles.forgot} to={"/restore"}>
              Забули пароль?
            </NavLink>
            <div className={styles.submit}>
              <AdminButton
                type={"submit"}
                variant={"primary"}
                style={{ width: "124px" }}
              >
                Увійти
              </AdminButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFrom;
