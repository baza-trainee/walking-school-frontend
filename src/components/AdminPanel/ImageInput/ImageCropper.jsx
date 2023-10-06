import React, { useCallback, useState } from "react";
import getCroppedImg from "./getCroppedImg";
import Cropper from "react-easy-crop";
import Button from "../../UI/Button/Button";

export const ImageCropper = ({ src, onClose, aspect }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState();
  const [, setCroppedImage] = useState();
  const onCropComplete = useCallback(
    async (_croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        src,
        croppedAreaPixels,
        rotation,
      );
      setCroppedImage(croppedImage);
      return croppedImage;
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation, src]);

  return (
    <div
      style={{
        zIndex: 1000000,
        position: "absolute",
        inset: "0 0 0 0",
      }}
    >
      <Cropper
        style={{
          containerStyle: { backgroundColor: "transparent", zIndex: 10000 },
        }}
        image={src}
        crop={crop}
        zoom={zoom}
        aspect={aspect}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />

      <Button
        type={"button"}
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
          zIndex: 10000,
          width: "148px",
          minHeight: "48px",
        }}
        onClick={async () => {
          const url = await showCroppedImage();
          onClose(`${url}`);
        }}
      >
        Обрізати
      </Button>
    </div>
  );
};

export default ImageCropper;
