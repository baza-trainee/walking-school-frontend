import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPartnerById, putPartner } from "../../../../API/partners";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";

import style from "./EditPartner.module.css";


const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const closeFunc = () => {
    navigate("/admin/partners");
  };

  const [inputValue, setInputValue] = useState("");
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [imageValue, setImageValue] = useState("");
  const imageChange = (newPreview) => {
    setImageValue(newPreview);
  };

  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useQuery({
    queryKey: ["partners"],
    queryFn: () => getPartnerById(id),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putPartner,
    onSettled: () => queryClient.invalidateQueries(["partners"]),
  });

  const submitFunc = async (event) => {
    event.preventDefault();
    console.log(imageValue);
    console.log(inputValue);
    const transformedData = {
      title: inputValue,
      image: await blobUrlToBase64(imageValue),
      created: "",
      id: id,
    };
    console.log(transformedData);
    try {
      mutation.mutateAsync(transformedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.page}>
      <AdminHeader
        withClose
        closeFunc={closeFunc}
        heading="Редагувати партнера"
      />
      <form onSubmit={submitFunc} className={style.page__content}>
        <div className={style.inputs}>
          <AdminInput
            value={inputValue}
            onChange={inputChange}
            variant="admin"
            placeholder="Назва"
          />
          <ImageInput
            value={imageValue}
            onChange={imageChange}
            variant="project"
          />
        </div>
        <div className={style.buttons}>
          <AdminButton style={{ width: "196px" }} variant="secondary">
            Скасувати
          </AdminButton>
          <AdminButton
            type="submit"
            style={{ width: "196px" }}
            variant="primary"
          >
            Зберегти
          </AdminButton>
        </div>
      </form>
    </div>
  );
};

export default EditPartner;
