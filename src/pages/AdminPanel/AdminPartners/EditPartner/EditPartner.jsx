import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import ErrorModal from "../../../../components/AdminPanel/ErrorModal/ErrorModal";
import { putPartner } from "../../../../API/partners";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";
import Alert from "../../../../components/AdminPanel/Alert/Alert";
import SpinnerLoader from "../../../../components/Loader/SpinnerLoader";

import style from "./EditPartner.module.css";

const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const partner = { ...location.state.partnerToEdit };

  const [success, setSuccess] = useState(false);
  const [userError, setUserError] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleDelete = () => {
    partner.image = "";
  };

  const inputChange = (event) => {
    partner.title = event.target.value;
  };

  const imageChange = (newPreview) => {
    partner.image = newPreview;
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putPartner,
    onSettled: () => queryClient.invalidateQueries(["partners"]),
  });

  const submitFunc = async (event) => {
    event.preventDefault();
    const title = partner.title;
    const image = partner.image;
    if (!title || !image) {
      setUserError(true);
    }
    if (title.length < 2 || title.length > 20) {
      setUserError(true);
    }
    const transformedData = {
      title: title,
      image: await blobUrlToBase64(image),
      id: id,
      created: partner.created,
    };
    try {
      mutation.mutateAsync(transformedData);
      setSuccess(true);
    } catch (error) {
      console.error(error);
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
    let message =
      `Не вдалось оновити дані партнера,(${mutation.error}) спробуйте будь ласка пізніше`;
    if (userError) {
      message =
        "Неправильно заповнена форма, повторіть спробу. (Довжина назви повинна бути від 2 до 20 символів, а зображення не може бути відсутнім)";
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
          message="Ваші зміни успішно збережено"
        />
      )}
      {isLeaving && (
        <Alert
          title={"Залишити сторінку"}
          message={
            "Ви дійсно хочете залишити сторінку? Процес редагування буде втрачено"
          }
          setActive={setIsLeaving}
          active={isLeaving}
          successFnc={() => navigate("/admin/partners")}
        />
      )}
      <AdminHeader
        withClose
        closeFunc={() => setIsLeaving(true)}
        heading="Редагувати партнера"
      />
      <form onSubmit={submitFunc} className={style.page__content}>
        <div className={style.inputs}>
          <AdminInput
            value={partner?.title}
            onChange={inputChange}
            variant="admin"
            placeholder="Назва"
          />
          <ImageInput
            src={partner?.image}
            resetPreviewImg={false}
            value={""}
            onChange={(newPreview) => imageChange(newPreview)}
            handleClear={() => handleDelete}
            variant="partner"
          />
        </div>
        <div className={style.buttons}>
          <AdminButton
            type="button"
            style={{ width: "196px" }}
            variant="secondary"
            onClick={() => setIsLeaving(true)}
          >
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
