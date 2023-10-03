import React from "react";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";

import style from "./EditPartner.module.css";


const EditPartner = () => {
  const navigate = useNavigate();

  const closeFunc = () => {
    navigate("/admin/partners");
  };

  const handleImageChange = (newPreview) => {
    console.log("New Preview:", newPreview);
  };
  return (
    <div className={style.page}>
      <AdminHeader withClose closeFunc={closeFunc} heading="Редагувати партнера" />
      <div className={style.page__content}>
        <div className={style.inputs}>
        <AdminInput variant="admin" placeholder="Назва"/>
        <ImageInput src="https://picsum.photos/200/100" onChange={handleImageChange} variant="project"/>
        </div>
        <div className={style.buttons}>
          <AdminButton style={{"width": "196px"}} variant="secondary">Скасувати</AdminButton>
          <AdminButton style={{"width": "196px"}} variant="primary">Зберегти</AdminButton>
        </div>
      </div>
    </div>
  );
};

export default EditPartner;
