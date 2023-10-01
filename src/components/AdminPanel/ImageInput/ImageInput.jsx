import React, { useEffect, useState } from "react";
import ImageCropper from "./ImageCropper";
import FileDrop from "./FileDrop";

/**
 * @description component goal is uploading the image, it returns an image in blob format
 * @params variant = project, partner, facebook, slide
 * @params src = image from backend (use when edit project, partner, facebook, slide)
 * @params error = error from form validation
 * */

const ImageInput = ({ variant = "project", onChange, src, error }) => {
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
      {isCropImg && (
        <ImageCropper
          aspect={aspect[variant]}
          src={file ? URL.createObjectURL(file) : src}
          onClose={(url) => {
            setPreview(url);
            setIsCropImg(false);
          }}
        />
      )}
      <FileDrop
        preview={preview}
        setPreview={setPreview}
        setFile={setFile}
        setIsCropImg={setIsCropImg}
        variant={variant}
        error={error}
      />
    </>
  );
};

export default ImageInput;
