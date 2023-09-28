import React, { useState } from "react";
import styles from "./Login.module.css";
import { Form, Formik } from "formik";
import AdminInput from "../../../components/AdminPanel/Input/AdminInput";
import * as Yup from "yup";
import { ReactComponent as Eye } from "../../../assets/admin/eye.svg";
import { ReactComponent as EyeOff } from "../../../assets/admin/eye_off.svg";
import { ReactComponent as Error } from "../../../assets/admin/error.svg";
import { NavLink } from "react-router-dom";
import AdminButton from "../../../components/AdminPanel/UI/Button/AdminButton";

const LoginFrom = ({ className = "", ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);

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
    password: Yup.string()
      .min(8, "Пароль повинен мати не менше 8 символів")
      .required("Поле є обов'язковим"),
  });

  return (
    <div className={styles.wrapper + className} {...props}>
      {isError && (
        <div className={styles.error}>
          <div>
            <Error />
          </div>
          <p>
            Надані облікові дані невірні. Будь ласка, перевірте свій логін і
            пароль та спробуйте ще раз.
          </p>
        </div>
      )}
      <h1>Вхід</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            console.log(true);
          } catch {
            setIsError(true);
            setTimeout(() => {
              setIsError(false);
            }, 5000);
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
            <AdminInput
              id="email"
              name={"email"}
              type="text"
              variant={"login"}
              label={"Логін"}
              value={values.email}
              onChange={handleChange}
              error={errors.email && touched.email ? errors.email : undefined}
              onBlur={handleBlur}
            />
            <AdminInput
              id="password"
              name={"password"}
              type={isVisible ? "text" : "password"}
              variant={"login"}
              placeholder={"Введіть пароль"}
              icon={isVisible ? <EyeOff /> : <Eye />}
              label={"Пароль"}
              value={values.password}
              onChange={handleChange}
              error={
                errors.password && touched.password
                  ? errors.password
                  : undefined
              }
              onMouseDown={() => setIsVisible((prev) => !prev)}
              onBlur={handleBlur}
            />
            <NavLink className={styles.forgot} to={"/restore"}>
              Забули пароль?
            </NavLink>
            <div className={styles.submit}>
              <AdminButton
                type={"submit"}
                variant={"primary"}
                disabled={!isValid || !(touched.email || touched.password)}
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
