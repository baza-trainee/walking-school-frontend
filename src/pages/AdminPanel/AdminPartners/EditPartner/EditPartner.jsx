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

// const fakePartner = {
//   image: "data:image/jpeg;base64,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",
//   title: "hello"
// }

const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const partner = { ...location.state.partnerToEdit };

  // const [partner, setPartner] = useState({});
  const [success, setSuccess] = useState(false);
  const [userError, setUserError] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["partner"],
  //   queryFn: () => getPartnerById(id),
  // });

  console.log(partner);

  // useEffect(() => {
  //   console.log(data);
  //   if (!isLoading && data) {
  //     console.log(data);
  //     setPartner({...data});
  //   }
  // }, [isLoading, data]);

  // useEffect(() => {
  //   console.group()
  //   console.log("partner updated:")
  //   console.log(partner)
  //   console.groupEnd()
  // }, [partner]);

  const handleDelete = () => {
    // setPartner({ ...partner, image: "" });
    partner.image = "";
  };

  const inputChange = (event) => {
    // setPartner({ ...partner, title: event.target.value });
    partner.title = event.target.value;
  };

  const imageChange = (newPreview) => {
    // setPartner({ ...partner, image: newPreview });
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
    console.log(partner.image);
    if (!title || !image) {
      setUserError(true);
      console.log("fields cannot be empty");
    }
    console.log(title);
    const transformedData = {
      title: title,
      image: await blobUrlToBase64(image),
      id: id,
      created: partner.created,
    };
    console.log(transformedData);
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
      "Не вдалось оновити дані партнера, спробуйте будь ласка пізніше";
    if (userError) {
      message = "Неправильно заповнена форма, повторіть спробу";
    }
    // if (error) {
    //   message = `Не вдалось завантажити дані про партнера: ${error.message}. Спробуйте будь ласка пізніше.`;
    // }
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
