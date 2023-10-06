import React, { useState } from "react";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";

import style from "./AddPartner.module.css";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";

const AddPartner = () => {
  const navigate = useNavigate();

  const closeFunc = () => {
    navigate("/admin/partners");
  };

  const [inputValue, setInputValue] = useState("");
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [imageValue, setImageValue] = useState("");
  const imageChange = (newPreview) => {
    setImageValue(newPreview);
  };

  const submitFunc = (event) => {
    event.preventDefault();
    console.log(imageValue);
    console.log(inputValue);
  };

  return (
    <div className={style.page}>
      <AdminHeader withClose closeFunc={closeFunc} heading="Додати партнера" />
      <form onSubmit={submitFunc} className={style.page__content}>
        <div className={style.inputs}>
          <AdminInput
            value={inputValue}
            onChange={inputChange}
            variant="admin"
            placeholder="Назва"
          />
          <ImageInput
            value={imageValue}
            onChange={imageChange}
            variant="project"
          />
        </div>
        <div className={style.buttons}>
          <AdminButton style={{ width: "196px" }} variant="secondary">
            Скасувати
          </AdminButton>
          <AdminButton
            style={{ width: "196px" }}
            type="submit"
            variant="primary"
          >
            Додати
          </AdminButton>
        </div>
      </form>
    </div>
  );
};

export default AddPartner;
