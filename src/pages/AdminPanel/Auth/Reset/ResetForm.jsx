import React, { useState } from "react";
import styles from "../Login.module.css";
import { Form, Formik } from "formik";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import * as Yup from "yup";
import { passwordValidationSchema } from "../../../../validationSchemas/validationSchema";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Close } from "../../../../assets/admin/close.svg";
import { ReactComponent as Eye } from "../../../../assets/admin/eye.svg";
import { ReactComponent as EyeOff } from "../../../../assets/admin/eye_off.svg";

const ResetForm = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [passVisible, setPassVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object().shape({
    password: passwordValidationSchema,
    confirmPass: Yup.string()
      .min(8, "Пароль повинен мати не менше 8 символів")
      .oneOf([Yup.ref("password"), null], "Паролі повинні співпадати")
      .required("Підтвердіть пароль"),
  });

  return (
    <div className={styles.block}>
      <div className={styles.wrapper} {...props}>
        <h1>Відновити пароль</h1>
        <p className={styles.text}>Створіть новий пароль </p>
        <Formik
          initialValues={{ password: "", confirmPass: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              setIsSuccess(true);
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
                  id="password"
                  name={"password"}
                  type={passVisible ? "text" : "password"}
                  icon={passVisible ? <EyeOff /> : <Eye />}
                  onMouseDown={() => setPassVisible((prev) => !prev)}
                  variant={"login"}
                  label={"Новий пароль"}
                  placeholder={"Введіть пароль"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.password && touched.password ? errors.password : null
                  }
                />
              </div>
              <div className={styles["login__form-input"]}>
                <AdminInput
                  id="confirmPass"
                  name={"confirmPass"}
                  type={confirmVisible ? "text" : "password"}
                  icon={confirmVisible ? <EyeOff /> : <Eye />}
                  onMouseDown={() => setConfirmVisible((prev) => !prev)}
                  variant={"login"}
                  label={"Підтвердити пароль"}
                  placeholder={"Введіть пароль"}
                  value={values.confirmPass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.confirmPass && touched.confirmPass
                      ? errors.confirmPass
                      : null
                  }
                />
              </div>
              <div className={styles.submit__forgot}>
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
      </div>
      {isSuccess && (
        <div className={styles.message}>
          <div className={styles.close}>
            <Close onClick={() => setIsSuccess(false)} />
          </div>
          Пароль успішно відновлено
        </div>
      )}
    </div>
  );
};

export default ResetForm;
