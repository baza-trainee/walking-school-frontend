import React, { useState } from "react";
import { CustomSelect } from "../../../../components/AdminPanel/Filters/CustomSelect/CustomSelect";
import { DateSelect } from "../../../../components/AdminPanel/Filters/DateSelect/DateSelect";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./AddProject.module.css";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";

const MockedOptions = [
  "Тунельний політ",
  "Банджі джампінг",
  "Стрибки з парашутом",
  "Стежка у хмарах",
];

const MockedOptions2 = ["0-18", "18-60"];

export const AddProject = () => {
  // TODO: use custom hook and move the logic there
  // TODO: use Formik (probably)
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    description: "",
    publishDate: null,
    eventDate: null,
    ageLimit: null,
    category: null,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (blob) => {
    setFormData({ ...formData, image: blob });
  };

  const handleDateChange = (field, date) => {
    if (!date) {
      return;
    }
    setFormData({ ...formData, [field]: date });
  };

  const handleSelectChange = (fieldName) => (selectedOption) => {
    setFormData({ ...formData, [fieldName]: selectedOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    const finalFormData = {
      ...formData,
      publishDate: formData.publishDate ? formData.publishDate : currentDate,
    };

    console.log("Sending data:", finalFormData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <AdminHeader heading={"Додати проэкт"} withClose={true} />
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <AdminInput
            name="title"
            variant="admin"
            placeholder="Заголовок"
            onChange={handleInputChange}
          />
          <AdminInput
            name="link"
            variant="admin"
            placeholder="Додайте посилання"
            onChange={handleInputChange}
          />
          <AdminInput
            name="description"
            variant="textarea"
            placeholder="Опис"
            onChange={handleInputChange}
          />
          <div className={styles.tooltipContainer}>
            <DateSelect
              placeholder={"Дата публікації"}
              onChange={(date) => handleDateChange("publishDate", date)}
              id={"publishDate"}
            />
            <Tooltip />
          </div>
          <div className={styles.buttonWrapper}>
            <AdminButton variant="secondary" children={"Скасувати"} />
            <AdminButton
              type="submit"
              variant="primary"
              children={"Зберегти"}
            />
          </div>
        </div>
        <div className={styles.rightBlock}>
          <DateSelect
            placeholder={"Період"}
            onChange={(date) => handleDateChange("eventDate", date)}
            id={"eventDate"}
          />
          <CustomSelect
            options={MockedOptions}
            onChange={handleSelectChange("category")}
          />
          <CustomSelect
            options={MockedOptions2}
            onChange={handleSelectChange("ageLimit")}
            placeholder="Вікові обмеження"
            selectPrompt="Оберіть вік"
          />
          <ImageInput
            variant="project"
            onChange={handleImageChange}
            src={null}
            error={null}
          />
        </div>
      </div>
    </form>
  );
};
