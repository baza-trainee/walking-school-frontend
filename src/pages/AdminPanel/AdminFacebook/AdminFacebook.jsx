import React, { useState } from "react";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import ImageInput from "../../../components/AdminPanel/ImageInput/ImageInput";
import AdminButton from "../../../components/AdminPanel/UI/Button/AdminButton";

import style from "./AdminFacebook.module.css";

const defaultValues = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
};

const AdminFacebook = () => {
  const [values, setValues] = useState(defaultValues);

  const handleImageChange = (index, newPreview) => {
    setValues((prevValues) => {
      const updatedValues = { ...prevValues };
      updatedValues[index] = newPreview || "";
      return updatedValues;
    });
  };

  const submitFunc = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className={style.facebook}>
      <AdminHeader heading="Facebook" />
      <div className={style.content}>
        <form onSubmit={submitFunc} className={style.form}>
          <div className={style.form__inputs}>
            {Object.keys(defaultValues).map((index) => (
              <ImageInput
                key={index}
                value={values[parseInt(index)]}
                onChange={(newPreview) =>
                  handleImageChange(parseInt(index), newPreview)
                }
                variant="facebook"
                name={index}
              />
            ))}
          </div>
          <div className={style.form__buttons}>
            <AdminButton style={{ width: "196px" }} variant="secondary">
              Скасувати
            </AdminButton>
            <AdminButton
              style={{ width: "196px" }}
              type="submit"
              variant="primary"
            >
              Зберегти
            </AdminButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminFacebook;
