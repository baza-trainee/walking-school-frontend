import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import ErrorModal from "../../../../components/AdminPanel/ErrorModal/ErrorModal";
import { getPartnerById, putPartner } from "../../../../API/partners";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";

import style from "./EditPartner.module.css";


const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [partner, setPartner] = useState({});

  const { data, isLoading, error } = useQuery({
    queryKey: ["partners"],
    queryFn: () => getPartnerById(id),
  });

  const handleDelete = () => {
    setImageValue("");
  }

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      setPartner(data);
    }
  }, [isLoading, data])

  
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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putPartner,
    onSettled: () => queryClient.invalidateQueries(["partners"]),
  });

  const submitFunc = async (event) => {
    event.preventDefault();
    console.log(imageValue);
    if(!imageValue || !inputValue) {
      console.log("fields cannot be empty");
      return
    } 
    console.log(inputValue);
    const transformedData = {
      title: inputValue,
      image: await blobUrlToBase64(imageValue),
      id: id,
    };
    console.log(transformedData);
    try {
      mutation.mutateAsync(transformedData);
    } catch (error) {
      console.error(error);
    }
  };

  if(error || mutation.isError) {
    return (
      <ErrorModal
        message={
          error
            ? `Не вдалось завантажити дані про партнера: ${error.message}. Спробуйте будь ласка пізніше.`
            : "Не вдалось оновити дані партнера, спробуйте будь ласка пізніше"
        }
        className={style.centered}
      />)
  }

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
            value={partner.title}
            onChange={inputChange}
            variant="admin"
            placeholder="Назва"
          />
          <ImageInput
            src={partner.image}
            value=""
            onChange={imageChange}
            handleClear={() => handleDelete}
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
