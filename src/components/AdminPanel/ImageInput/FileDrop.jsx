import React, { useEffect, useState } from "react";
import styles from "./Image.module.css";
import { useDropzone } from "react-dropzone";
import { ReactComponent as Image } from "../../../assets/admin/image.svg";
import { ReactComponent as DownLoad } from "../../../assets/admin/download.svg";
import { ReactComponent as Close } from "../../../assets/admin/close.svg";
import FileError from "./FileError";

/**
 * @description component for choosing files from desktop
 * @params get his props from ImageInput component

 * */

const FileDrop = ({
  preview,
  setPreview,
  setFile,
  setIsCropImg,
  variant,
  error,
  ...props
}) => {
  const [fileError, setFileError] = useState("");

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
        "image/webp": [".webp"],
        "image/svg": [".svg"],
      },
      maxSize: 2000000, // 2 MB
    });

  useEffect(() => {
    if (fileRejections.length > 0) {
      const fileNames = fileRejections.map((file) => file.file.name).join(", ");
      setFileError(
        `${fileNames} перевищують максимальний ліміт розміру файлу для цього сайту.`,
      );
    } else {
      setFile(acceptedFiles[0]);
      setIsCropImg(!!acceptedFiles[0]);
    }
  }, [acceptedFiles, fileRejections, setFile, setIsCropImg]);

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
            }`}
          >
            <Close />
          </div>
        </>
      ) : (
        <>
          {fileError ? (
            <FileError
              errors={fileError}
              className={`${styles["file-error"]} ${
                variant === "slice"
                  ? styles["font-large"]
                  : styles["font-small"]
              }`}
            />
          ) : (
            <>
              <Image />
              <div
                className={styles.download}
                style={{ color: error ? "#F00631" : "" }}
              >
                <span>Завантажити зображення</span> <DownLoad />
              </div>
            </>
          )}
          <div
            className={`${styles.format} ${
              variant === "slide" ? styles["font-large"] : styles["font-small"]
            }`}
          >
            <p>Формат зображення: JPG, PNG, SVG, WEBP</p>
            <p>Максимальний розмір: 2 МБ</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileDrop;
