import React, { useState, useEffect } from "react";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import ImageInput from "../../../components/AdminPanel/ImageInput/ImageInput";
import AdminButton from "../../../components/AdminPanel/UI/Button/AdminButton";
import SpinnerLoader from "../../../components/Loader/SpinnerLoader";
import Alert from "../../../components/AdminPanel/Alert/Alert";
import ErrorModal from "../../../components/AdminPanel/ErrorModal/ErrorModal";
import { blobUrlToBase64 } from "../../../heplers/BlobToBase64";
import style from "./AdminFacebook.module.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getFacebook,
  postFacebook,
  putFacebook,
} from "../../../API/followUsFacebook";

const defaultValues = [
  { id: 0, image: "", wasImage: false, index: 0 },
  { id: 1, image: "", wasImage: false, index: 1 },
  { id: 2, image: "", wasImage: false, index: 2 },
  { id: 3, image: "", wasImage: false, index: 3 },
  { id: 4, image: "", wasImage: false, index: 4 },
  { id: 5, image: "", wasImage: false, index: 5 },
];

const AdminFacebook = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["facebook"],
    queryFn: getFacebook,
  });

  const [values, setValues] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (index, newPreview) => {
    const updatedValues = [...values];
    updatedValues[index] = {
      ...updatedValues[index],
      image: newPreview,
    };
    setValues(updatedValues);
    console.log(values);
  };

  const handleDelete = (index) => {
    const updatedValues = [...values];
    updatedValues[index] = {
      ...updatedValues[index],
      image: null,
    };
    setValues(updatedValues);
    console.log(values);
  };

  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: postFacebook,
    onSettled: () => queryClient.invalidateQueries(["facebook"]),
  });

  const putMutation = useMutation({
    mutationFn: putFacebook,
    onSettled: () => queryClient.invalidateQueries(["facebook"]),
  });

  async function transformValues(values) {
    const transformed = await Promise.all(
      values.map(async (value) => {
        if (value.image && value.image !== "") {
          if (value.image.includes("data:image/jpeg;base64")) {
            return {
              id: value.id,
              image: value.image,
              wasImage: value.wasImage,
            };
          }
          const image = await blobUrlToBase64(value.image);
          return {
            id: value.id,
            image: image,
            wasImage: value.wasImage,
          };
        } else {
          return {
            id: value.id,
            image: null,
            wasImage: value.wasImage,
          };
        }
      }),
    );
    return transformed;
  }

  const submitFunc = async (event) => {
    event.preventDefault();
    console.log(values);
    const transformedValues = await transformValues(values);
    console.log(transformedValues);
    let successfulRequests = 0;

    try {
      for (const value of transformedValues) {
        if (!value.wasImage) {
          await postMutation.mutateAsync({ image: [value.image] });
          successfulRequests += 1;
        } else {
          await putMutation.mutateAsync({ id: value.id, image: [value.image] });
          successfulRequests += 1;
        }
      }
    } catch (error) {
      console.log(error);
    }
    if (successfulRequests == 6) {
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (!isLoading && data) {
      const updatedValues = [...defaultValues];
      data.forEach((element, index) => {
        updatedValues[index] = {
          id: element.id,
          image: element.image,
          wasImage: true,
          index: index,
        };
      });

      setValues(updatedValues);
    }
  }, [isLoading, data]);

  if (isLoading || putMutation.isLoading || postMutation.isLoading ) {
    return (
      <div className={style.centered}>
        <SpinnerLoader />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorModal
        message={`Не вдалось завантажити зображення: ${error.message}. Спробуйте будь ласка пізніше.`}
        className={style.centered}
      />
    );
  }

  return (
    <div className={style.facebook}>
      <AdminHeader heading="Facebook" />
      <div className={style.content}>
        {success && (
          <Alert
            active={success}
            setActive={(value) => {
              setSuccess(value);
            }}
            type="success"
            title="Збережено!"
            message="Ваші зміни успішно збережено"
          />
        )}
        <form onSubmit={submitFunc} className={style.form}>
          <div className={style.form__inputs}>
            {values.map((element) => (
              <ImageInput
                key={element.id}
                value=""
                src={element.image ? element.image : ""}
                onChange={(newPreview) =>
                  handleImageChange(element.index, newPreview)
                }
                handleClear={() => handleDelete(element.index)}
                variant="facebook"
                name={element.id}
              />
            ))}
          </div>
          <div className={style.form__buttons}>
            <AdminButton type="button" style={{ width: "196px" }} variant="secondary">
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
