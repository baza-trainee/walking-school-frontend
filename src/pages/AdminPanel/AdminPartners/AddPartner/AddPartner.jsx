import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import SpinnerLoader from "../../../../components/Loader/SpinnerLoader";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";
import { postPartner } from "../../../../API/partners";
import ErrorModal from "../../../../components/AdminPanel/ErrorModal/ErrorModal";
import Alert from "../../../../components/AdminPanel/Alert/Alert";

import style from "./AddPartner.module.css";

const AddPartner = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [userError, setUserError] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

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
    mutationFn: postPartner,
    onSettled: () => queryClient.invalidateQueries(["partners"]),
  });

  const submitFunc = async (event) => {
    event.preventDefault();
    if (!imageValue || !inputValue) {
      setUserError(true);
    }
    const transformedData = {
      title: inputValue,
      image: await blobUrlToBase64(imageValue),
    };
    try {
      mutation.mutateAsync(transformedData);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (mutation.isLoading) {
    return (
      <div className={style.centered}>
        <SpinnerLoader />
      </div>
    );
  }

  if (mutation.isError || userError) {
    let message = "Не вдалось додати партнера, спробуйте будь ласка пізніше";
    if (userError) {
      message = "Неправильно заповнена форма, повторіть спробу";
    }
    return <ErrorModal message={message} className={style.centered} />;
  }

  return (
    <div className={style.page}>
      {success && (
        <Alert
          active={success}
          setActive={(value) => {
            setSuccess(value);
            navigate("/admin/partners");
          }}
          type="success"
          title="Збережено!"
          message="Партнера успішно додано"
        />
      )}
      {isLeaving && (
        <Alert
          title={"Залишити сторінку"}
          message={
            "Ви дійсно хочете залишити сторінку? Процес створення буде втрачено"
          }
          setActive={setIsLeaving}
          active={isLeaving}
          successFnc={() => navigate("/admin/partners")}
        />
      )}
      <AdminHeader
        withClose
        closeFunc={() => setIsLeaving(true)}
        heading="Додати партнера"
      />
      <form onSubmit={submitFunc} className={style.page__content}>
        <div className={style.inputs}>
          <AdminInput
            value={inputValue}
            onChange={inputChange}
            variant="admin"
            placeholder="Назва"
          />
          <ImageInput src="" onChange={imageChange} variant="partner" />
        </div>
        <div className={style.buttons}>
          <AdminButton
            type="button"
            onClick={() => setIsLeaving(true)}
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
            Додати
          </AdminButton>
        </div>
      </form>
    </div>
  );
};

export default AddPartner;
