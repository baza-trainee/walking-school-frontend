import { useState } from "react";
import { useFormik } from "formik";
import Button from "../../UI/Button/Button";
import { CustomInput } from "../CustomInput/CustomInput";
import styles from "./ContactForm.module.css";
import { Modal } from "../../Modal/Modal";
import { validationSchema } from "../../../validationSchemas/contactSchema";

export const ContactForm = () => {
  const [isActive, setIsActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      surname: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      setIsActive(true);
      resetForm();
    },
  });

  return (
    <form
      data-testid="form"
      action=""
      className={styles.form}
      onSubmit={formik.handleSubmit}
    >
      <div className={styles.wrapper}>
        <CustomInput
          type="text"
          placeholder="Введіть своє ім’я"
          text="Ім’я"
          name="username"
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          error={formik.touched.username && formik.errors.username}
          required
        />
        <CustomInput
          type="text"
          placeholder="Введіть своє прізвище"
          text="Прізвище"
          name="surname"
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
          error={formik.touched.surname && formik.errors.surname}
          required
        />
        <CustomInput
          type="email"
          placeholder="Введіть електронну пошту"
          text="Email"
          name="email"
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          required
        />
        <CustomInput
          type="tel"
          placeholder="+XXX -"
          text="Телефон"
          name="phoneNumber"
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
      </div>

      <CustomInput
        type="textarea"
        placeholder="Введіть ваше повідомлення"
        text="Повідомлення"
        name="message"
        onChangeHandler={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        error={formik.touched.message && formik.errors.message}
      />

      <Button className={styles.button} variant="large" type="submit">
        Надіслати
      </Button>

      {isActive && <Modal setIsActive={setIsActive} />}
    </form>
  );
};
