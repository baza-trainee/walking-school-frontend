import React, { useEffect, useState } from "react";
import styles from "./Image.module.css";
import { useDropzone } from "react-dropzone";
import { ReactComponent as Image } from "../../../assets/admin/image.svg";
import { ReactComponent as DownLoad } from "../../../assets/admin/download.svg";
import { ReactComponent as Close } from "../../../assets/admin/close.svg";

const FileDrop = ({
  preview,
  setPreview,
  setFile,
  setIsCropImg,
  variant,
  ...props
}) => {
  const [error, setError] = useState("");

  const variantClass = {
    project: styles.project,
    facebook: styles.facebook,
    slide: styles.slide,
    partner: styles.partner,
  };
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      accept: {
        "image/jpeg": [".jpeg"],
        "image/jpg": [".jpg"],
        "image/png": [".png"],
      },
      maxSize: 800000, // 400 KB
    });

  useEffect(() => {
    if (fileRejections.length > 0) {
      setError("Оберіть зображення менше 300Кб");
    } else {
      setFile(acceptedFiles[0]);
      setIsCropImg(!!acceptedFiles[0]);
    }
  }, [acceptedFiles, fileRejections]);

  return (
    <div
      {...getRootProps()}
      className={`${styles.container} ${variantClass[variant]}`}
      style={{
        gap: preview ? "0" : "",
        padding: preview ? "0" : "",
      }}
    >
      <input {...getInputProps()} type="file" {...props} />
      {preview ? (
        <>
          <img src={preview} alt="Preview" />
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setPreview("");
            }}
            className={` ${styles["close-img"]}   ${
              variant === "slide"
                ? styles["absolute-20"]
                : variant === "facebook"
                ? styles["absolute-12"]
                : styles["absolute-4"]
            } 
  `}
          >
            <Close />
          </div>
        </>
      ) : (
        <>
          <Image />
          <div className={styles.download}>
            <span>Завантажити зображення</span> <DownLoad />
          </div>
          <div
            className={`${styles.format} ${
              variant === "slide" ? styles["font-large"] : styles["font-small"]
            }`}
          >
            <p>Формат зображення: JPG, PNG</p>
            <p>Максимальний розмір: 400 KB</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileDrop;
