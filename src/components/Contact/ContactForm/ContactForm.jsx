import { useState } from "react";
import Button from "../../UI/Button/Button";
import { CustomInput } from "../CustomInput/CustomInput";
import styles from "./ContactForm.module.css";
import { Modal } from "../../Modal/Modal";

export const ContactForm = () => {
  // TODO: create a custom hook and move the form logic there
  const [formData, setFormData] = useState({
    username: "",
    surname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: null,
    surname: null,
    email: null,
    phoneNumber: "",
    message: "",
  });
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
      username: !formData.username ? "Введіть своє ім’я" : null,
      surname: !formData.surname ? "Введіть своє прізвище" : null,
      email: !formData.email ? "Введіть електронну пошту" : null,
    };

    if (errors.username || errors.email || errors.surname) {
      setFormErrors(errors);
      return;
    }

    setFormData({
      username: "",
      surname: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    setFormErrors({
      username: "",
      surname: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    setIsActive(true);
  };

  const handleInputChange = (event, setAction) => {
    const { name, value } = event.target;
    setAction((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      data-testid="form"
      action=""
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.wrapper}>
        <CustomInput
          type="text"
          placeholder="Введіть своє ім’я"
          text="Ім’я"
          name="username"
          onChangeHandler={(event) => handleInputChange(event, setFormData)}
          value={formData.username}
          error={formErrors.username}
          required
        />
        <CustomInput
          type="text"
          placeholder="Введіть своє прізвище"
          text="Прізвище"
          name="surname"
          onChangeHandler={(event) => handleInputChange(event, setFormData)}
          value={formData.surname}
          error={formErrors.surname}
          required
        />
        <CustomInput
          type="email"
          placeholder="Введіть електронну пошту"
          text="Email"
          name="email"
          onChangeHandler={(event) => handleInputChange(event, setFormData)}
          value={formData.email}
          error={formErrors.email}
          required
        />

        <CustomInput
          type="tel"
          placeholder="+XXX -"
          text="Телефон"
          name="phoneNumber"
          onChangeHandler={(event) => handleInputChange(event, setFormData)}
          value={formData.phoneNumber}
          error={formErrors.phoneNumber}
        />
      </div>

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
      {isActive && <Modal setIsActive={setIsActive} />}
    </form>
  );
};
