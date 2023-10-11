import React from "react";
import styles from "./AdminHero.module.css";
import imgFrame from "../../../assets/admin/imageInput/image-frame.svg";

export const AddImage = ({ activeInput, onFileChange, selectedFile }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    onFileChange(file);
  };

  return !activeInput ? (
    <div className={styles.imgFrame}>
      <img src={imgFrame} alt="frame" />
      <p className={styles.message}>
        У вас поки немає
        <br /> зображень
      </p>
    </div>
  ) : (
    <div className={styles.imgFrame}>
      <img src={imgFrame} alt="frame" />
      <p>Перетягніть свій файл сюди </p>
      <label className={styles.label} htmlFor="fileInput">
        або натисніть, щоб завантажити
      </label>
      <input
        id="fileInput"
        placeholder="або натисніть, щоб завантажити"
        type="file"
        onChange={handleFileChange}
        className={styles.inputFile}
      />
      <p>
        Формат зображення: JPG, PNG
        <br /> Максимальний розмір: 2 MB.
      </p>
    </div>
  );
};
