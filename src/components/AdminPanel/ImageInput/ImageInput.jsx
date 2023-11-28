import React, { useEffect, useState } from "react";
import ImageCropper from "./ImageCropper";
import FileDrop from "./FileDrop";

/**
 * @description component goal is uploading the image, it returns an image in blob format
 * @params variant = project, partner, facebook, slide
 * @params src = image from backend (use when edit project, partner, facebook, slide)
 * @params error = error from form validation
 * @paramms resetPreviewImg = boolean - use if you need cancel changes while adding a new project, partner, etc
 * */

const ImageInput = ({
  variant = "project",
  onChange,
  src,
  error,
  handleClear,
  resetPreviewImg,
  ...props
}) => {
  const [isCropImg, setIsCropImg] = useState(false);
  const [preview, setPreview] = useState(src);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (preview) {
      onChange(preview);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preview]);

  useEffect(() => {
    if (resetPreviewImg) {
      setPreview("");
    }
  }, [preview, resetPreviewImg]);

  const aspect = {
    project: 367 / 288,
    facebook: 322 / 360,
    slide: 1440 / 676,
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
        handleClear={handleClear}
        {...props}
      />
    </>
  );
};

export default ImageInput;
