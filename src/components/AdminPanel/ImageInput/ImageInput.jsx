import React, { useEffect, useState } from "react";
import styles from "./Image.module.css";
import { ReactComponent as Image } from "../../../assets/admin/image.svg";
import { ReactComponent as DownLoad } from "../../../assets/admin/download.svg";
import { useDropzone } from "react-dropzone";
import ImageCropper from "./ImageCropper";

/**
 * @description component goal is uploading the image
 * @params variant = project(for partners and projects pages), facebook, slide
 * @params
 * */
const ImageInput = ({ variant = "slide", onChange, src }) => {
  const [isCropImg, setIsCropImg] = useState(false);
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      accept: {
        "image/jpeg": [".jpeg"],
        "image/jpg": [".jpg"],
        "image/png": [".png"],
      },
      maxSize: 400000, // 400 KB
    });

  useEffect(() => {
    if (fileRejections.length > 0) {
      setError("Оберіть зображення менше 300Кб");
    } else {
      setFile(acceptedFiles[0]);
      setIsCropImg(!!acceptedFiles[0]);
    }
  }, [acceptedFiles, fileRejections]);

  useEffect(() => {
    onChange(preview);
  }, [preview]);

  useEffect(() => {
    if (!preview) {
      setPreview(src);
    }
  }, [src]);

  const variantClass = {
    project: styles.project,
    facebook: styles.facebook,
    slide: styles.slide,
  };

  return (
    <>
      {isCropImg &&
        (file ? (
          <ImageCropper
            aspect={1062 / 378}
            src={URL.createObjectURL(file)}
            onClose={(url) => {
              setPreview(url);
              setIsCropImg(false);
            }}
          />
        ) : (
          <ImageCropper
            aspect={380 / 150}
            src={src}
            onClose={(url) => {
              setPreview(url);
              setIsCropImg(false);
            }}
          />
        ))}

      <div
        {...getRootProps()}
        className={`${styles.container} ${variantClass[variant]}`}
        style={{ gap: preview ? "0" : "" }}
      >
        <Image />
        <input {...getInputProps()} type="file" />
        {preview ? (
          <img src={preview} alt="Preview" />
        ) : (
          <>
            <div className={styles.download}>
              <span>Завантажити зображення</span> <DownLoad />
            </div>
            <div
              className={`${styles.format} ${
                variant === "slide"
                  ? styles["font-large"]
                  : styles["font-small"]
              }`}
            >
              <p>Формат зображення: JPG, PNG</p>
              <p>Максимальний розмір: 400 KB</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ImageInput;
