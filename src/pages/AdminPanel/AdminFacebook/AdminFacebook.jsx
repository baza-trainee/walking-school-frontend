import React, { useState } from "react";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import ImageInput from "../../../components/AdminPanel/ImageInput/ImageInput";
import AdminButton from "../../../components/AdminPanel/UI/Button/AdminButton";
import { blobUrlToBase64 } from "../../../heplers/BlobToBase64";
import style from "./AdminFacebook.module.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFacebook, putFacebook } from "../../../API/followUsFacebook";

const defaultValues = [
  { id: 1, image: "" },
  { id: 2, image: "" },
  { id: 3, image: "" },
  { id: 4, image: "" },
  { id: 5, image: "" },
  { id: 6, image: "" },
];

const AdminFacebook = () => {
  const [values, setValues] = useState(defaultValues);

  const handleImageChange = (index, newPreview) => {
    setValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index - 1] = {
        ...updatedValues[index - 1],
        image: newPreview || "",
      };
      return updatedValues;
    });
  };

  const { data, loading, error } = useQuery({
    queryKey: ["facebook"],
    queryFn: getFacebook,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putFacebook,
    onSettled: () => queryClient.invalidateQueries(["facebook"]),
  });

  async function transformValues(values) {
    const transformed = await Promise.all(
      values.map(async (value) => {
        if (value.image) {
          const image = await blobUrlToBase64(value.image);
          return {
            id: value.id,
            image: image,
          };
        } else {
          return {
            id: value.id,
            image: null,
          };
        }
      })
    );
    return transformed;
  }

  const submitFunc = async (event) => {
    event.preventDefault();
    const transformedValues = await transformValues(values)
    try{
      await mutation.mutateAsync(transformedValues)
    }
    catch(error) {
      console.log(error)
    }
  };

  return (
    <div className={style.facebook}>
      <AdminHeader heading="Facebook" />
      <div className={style.content}>
        <form onSubmit={submitFunc} className={style.form}>
          <div className={style.form__inputs}>
            {values.map((element) => (
              <ImageInput
                key={element.id}
                value={values[element]}
                onChange={(newPreview) =>
                  handleImageChange(element.id, newPreview)
                }
                variant="facebook"
                name={element.id}
              />
            ))}
          </div>
          <div className={style.form__buttons}>
            <AdminButton style={{ width: "196px" }} variant="secondary">
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
