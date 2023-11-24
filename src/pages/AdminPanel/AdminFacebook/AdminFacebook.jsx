import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import ImageInput from "../../../components/AdminPanel/ImageInput/ImageInput";
import AdminButton from "../../../components/AdminPanel/UI/Button/AdminButton";
import SpinnerLoader from "../../../components/Loader/SpinnerLoader";
import Alert from "../../../components/AdminPanel/Alert/Alert";
import ErrorModal from "../../../components/AdminPanel/ErrorModal/ErrorModal";
import { blobUrlToBase64 } from "../../../heplers/BlobToBase64";
import {
  getFacebook,
  postFacebook,
  putFacebook,
} from "../../../API/followUsFacebook";
import style from "./AdminFacebook.module.css";

const defaultValues = [
  { id: 0, image: null, wasImage: false, index: 0 },
  { id: 1, image: null, wasImage: false, index: 1 },
  { id: 2, image: null, wasImage: false, index: 2 },
  { id: 3, image: null, wasImage: false, index: 3 },
  { id: 4, image: null, wasImage: false, index: 4 },
  { id: 5, image: null, wasImage: false, index: 5 },
];

const AdminFacebook = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["facebook"],
    queryFn: getFacebook,
  });

  const [values, setValues] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      const updatedValues = [...defaultValues];
      data.forEach((element, index) => {
        updatedValues[index] = {
          id: element.id,
          image: (!element.image[0] || element.image[0].includes("text/html")) ? "" : element.image,
          wasImage: true,
          index: index,
        };
      });

      setValues(updatedValues);
    }
  }, [isLoading, data]);

  useEffect(() => {
    
  }, [values]);

  const handleImageChange = (index, newPreview) => {
    const updatedValues = [...values];
    updatedValues[index] = {
      ...updatedValues[index],
      image: newPreview,
    };
    setValues(updatedValues);
  };

  const handleDelete = (index) => {
    const updatedValues = [...values];
    updatedValues[index] = {
      ...updatedValues[index],
      image: [""],
    };
    setValues(updatedValues);
  };

  async function transformValues(values) {
    const transformed = await Promise.all(
      values.map(async (value) => {
        if (value.image && (value.image !== "" || value.image[0] !== "")) {
          const image = await blobUrlToBase64(value.image);
          if(image.includes("text/html")){
            return {
              id: value.id,
              image: "",
              wasImage: value.wasImage,
            };
          }
          return {
            id: value.id,
            image: image,
            wasImage: value.wasImage,
          };
        } else {
          return {
            id: value.id,
            image: "",
            wasImage: value.wasImage,
          };
        }
      }),
    );
    return transformed;
  }

  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: postFacebook,
    onSettled: () => queryClient.invalidateQueries(["facebook"]),
  });

  const putMutation = useMutation({
    mutationFn: putFacebook,
    onSettled: () => queryClient.invalidateQueries(["facebook"]),
  });

  const submitFunc = async (event) => {
    event.preventDefault();
    const transformedValues = await transformValues(values);
    let successfulRequests = 0;
    console.log(transformedValues);

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
    if (successfulRequests === 6) {
      setSuccess(true);
    }
  };

  if (isLoading || putMutation.isLoading || postMutation.isLoading) {
    return (
      <div className={style.centered}>
        <SpinnerLoader />
      </div>
    );
  }

  if (error || putMutation.isError || postMutation.isError) {
    return (
      <ErrorModal
        message={
          error
            ? `Не вдалось завантажити зображення: ${error.message}. Спробуйте будь ласка пізніше.`
            : "Не вдалось оновити зображення, спробуйте будь ласка пізніше"
        }
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
                src={!element.image || !element.image[0] ? "" : element.image}
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
            <AdminButton
              type="button"
              style={{ width: "196px" }}
              variant="secondary"
            >
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
