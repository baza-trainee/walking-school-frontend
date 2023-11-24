import React, { useState } from "react";
import styles from "../../../../pages/AdminPanel/Auth/Login.module.css";
import { Form, Formik } from "formik";
import AdminInput from "../../Input/AdminInput";
import { ReactComponent as Eye } from "../../../../assets/admin/auth/eye.svg";
import { ReactComponent as EyeOff } from "../../../../assets/admin/auth/eye_off.svg";
import { NavLink, useNavigate } from "react-router-dom";
import AdminButton from "../../UI/Button/AdminButton";
import { loginValidationSchema } from "../authValidationSchemas";
import ErrorModal from "../../ErrorModal/ErrorModal";
import { login } from "../../../../API/authAPI";

const LoginForm = ({ className = "", ...props }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className={styles.wrapper + className} {...props}>
      {isError && (
        <ErrorModal
          message={
            "Надані облікові дані невірні. Будь ласка, перевірте свій логін і пароль та спробуйте ще раз."
          }
          className={styles.error}
        />
      )}
      <h1>Вхід</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const res = await login({
              login: values.email,
              password: values.password,
            });

            if (res.code === 200) {
              navigate("/admin");
            }
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
            <div className={styles["login__form-input"]}>
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
            </div>
            <div className={styles["login__form-input"]}>
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
            </div>
            <NavLink className={styles.forgot} to={"/forgot"} target="_blank">
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

export default LoginForm;
