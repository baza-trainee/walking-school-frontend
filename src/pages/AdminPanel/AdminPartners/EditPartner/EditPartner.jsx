import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import ErrorModal from "../../../../components/AdminPanel/ErrorModal/ErrorModal";
import { putPartner } from "../../../../API/partners";
import { blobUrlToBase64 } from "../../../../heplers/BlobToBase64";
import Alert from "../../../../components/AdminPanel/Alert/Alert";
import SpinnerLoader from "../../../../components/Loader/SpinnerLoader";
import style from "./EditPartner.module.css";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";

const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [partner, setPartner] = useState({
    id: "c3d4760e-cb51-48c9-a771-415701cba0e2",
    title: "partner",
    image:
      "data:image/jpeg;base64,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",
    created: "11-2023",
  });
  const [success, setSuccess] = useState(false);
  const [userError, setUserError] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const isLoading = false;
  const error = "";

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["partner"],
  //   queryFn: () => getPartnerById(id),
  // });
  //
  // useEffect(() => {
  //   if (!isLoading && data) {
  //     setPartner(data);
  //   }
  // }, [isLoading, data]);

  const handleDelete = () => {
    setPartner({ ...partner, image: "" });
  };

  const inputChange = (event) => {
    setPartner({ ...partner, title: event.target.value });
  };

  const imageChange = (newPreview) => {
    setPartner({ ...partner, image: newPreview });
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
      return;
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

  if (isLoading || mutation.isLoading) {
    return (
      <div className={style.centered}>
        <SpinnerLoader />
      </div>
    );
  }

  if (error || mutation.isError || userError) {
    let message =
      "Не вдалось оновити дані партнера, спробуйте будь ласка пізніше";
    if (userError) {
      message = "Неправильно заповнена форма, повторіть спробу";
    }
    if (error) {
      message = `Не вдалось завантажити дані про партнера: ${error.message}. Спробуйте будь ласка пізніше.`;
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
            value={partner.title}
            onChange={inputChange}
            variant="admin"
            placeholder="Назва"
          />
          <ImageInput
            src={partner.image ? partner.image : ""}
            value={partner.image ? partner.image : ""}
            onChange={(newPreview) => imageChange(newPreview)}
            handleClear={handleDelete}
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
