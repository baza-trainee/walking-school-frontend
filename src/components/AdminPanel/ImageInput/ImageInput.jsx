import React, { useEffect, useState } from "react";
import ImageCropper from "./ImageCropper";
import FileDrop from "./FileDrop";
import styles from "./Image.module.css";

/**
 * @description component goal is uploading the image
 * @params variant = project, partner, facebook, slide
 * @params
 * */

const ImageInput = ({ variant = "project", onChange, src }) => {
  const [isCropImg, setIsCropImg] = useState(false);
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    onChange(preview);
  }, [preview]);

  useEffect(() => {
    if (!preview) {
      setPreview(src);
    }
  }, [src]);

  const aspect = {
    project: 305 / 216,
    facebook: 322 / 360,
    slide: 1062 / 378,
    partner: 214 / 69,
  };

  return (
    <>
      {isCropImg &&
        (file ? (
          <ImageCropper
            aspect={aspect[variant]}
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
      <FileDrop
        preview={preview}
        setFile={setFile}
        setIsCropImg={setIsCropImg}
        variant={variant}
      />
    </>
  );
};

export default ImageInput;
