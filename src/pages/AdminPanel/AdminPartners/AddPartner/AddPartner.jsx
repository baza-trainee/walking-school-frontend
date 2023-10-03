import React from "react";
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

  const handleImageChange = (newPreview) => {
    console.log("New Preview:", newPreview);
  };
  return (
    <div className={style.page}>
      <AdminHeader withClose closeFunc={closeFunc} heading="Додати партнера" />
      <div className={style.page__content}>
        <div className={style.inputs}>
        <AdminInput variant="admin" placeholder="Назва"/>
        <ImageInput onChange={handleImageChange} variant="project"/>
        </div>
        <div className={style.buttons}>
          <AdminButton style={{"width": "196px"}} variant="secondary">Скасувати</AdminButton>
          <AdminButton style={{"width": "196px"}} variant="primary">Додати</AdminButton>
        </div>
      </div>
    </div>
  );
};

export default AddPartner;
