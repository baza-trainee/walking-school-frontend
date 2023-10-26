import React, { useState } from "react";
import { Form, Formik } from "formik";
import AdminButton from "../../UI/Button/AdminButton";
import AdminInput from "../../Input/AdminInput";
import styles from "../../../../pages/AdminPanel/Auth/Login.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Close } from "../../../../assets/admin/common/close.svg";
import { forgotValidationSchema } from "../authValidationSchemas";

const ForgotForm = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [isSent, setIsSent] = useState(false);

  return (
    <div className={styles.block}>
      <div className={styles.wrapper} {...props}>
        <h1>Забули пароль</h1>
        <p className={styles.text}>Вкажіть ваш email, щоб підтвердити особу </p>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotValidationSchema}
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
      {isSent && (
        <div className={styles.message}>
          <div className={styles.close}>
            <Close onClick={() => setIsSent(false)} />
          </div>
          Перейдіть за посиланням, відправленим у листі на Вашу пошту
        </div>
      )}
    </div>
  );
};

export default ForgotForm;