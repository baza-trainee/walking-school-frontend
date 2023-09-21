import { useState } from "react";
import Button from "../../UI/Button/Button";
import { CustomInput } from "../CustomInput/CustomInput";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: null,
    email: null,
    message: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
      username: !formData.username ? "Введіть своє ім’я" : null,
      email: !formData.email ? "Введіть електронну пошту" : null,
      message: !formData.message ? "Введіть ваше повідомлення" : null,
    };

    if (errors.username || errors.email || errors.message) {
      setFormErrors(errors);
      return;
    }

    setFormData({
      username: "",
      email: "",
      message: "",
    });
    setFormErrors({
      username: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (event, setAction) => {
    const { name, value } = event.target;
    setAction((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        placeholder="Введіть своє ім’я"
        text="Ім’я"
        name="username"
        onChangeHandler={(event) => handleInputChange(event, setFormData)}
        value={formData.username}
        error={formErrors.username}
      />
      <CustomInput
        type="email"
        placeholder="Введіть електронну пошту"
        text="Email"
        name="email"
        onChangeHandler={(event) => handleInputChange(event, setFormData)}
        value={formData.email}
        error={formErrors.email}
      />
      <CustomInput
        type="textarea"
        placeholder="Введіть ваше повідомлення"
        name="message"
        onChangeHandler={(event) => handleInputChange(event, setFormData)}
        value={formData.message}
        error={formErrors.message}
      />
      <Button className={styles.button} variant="large" type="submit">
        Надіслати
      </Button>
    </form>
  );
};
