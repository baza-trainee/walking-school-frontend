import Button from "../../UI/Button/Button";
import { CustomInput } from "../CustomInput/CustomInput";
import styles from "./ContactForm.module.css";
import { Modal } from "../../Modal/Modal";
import { useContactForm } from "../../../hooks/useContactForm";

export const ContactForm = () => {
  const { formik, isActive, setIsActive } = useContactForm();

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
          name="name"
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name}
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
          name="phone"
          onChangeHandler={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          error={formik.touched.phone && formik.errors.phone}
        />
      </div>

      <CustomInput
        type="textarea"
        placeholder="Введіть ваше повідомлення"
        text="Повідомлення"
        name="text"
        onChangeHandler={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.text}
        error={formik.touched.text && formik.errors.text}
      />

      <Button className={styles.button} variant="large" type="submit">
        Надіслати
      </Button>

      {isActive && <Modal setIsActive={setIsActive} />}
    </form>
  );
};
