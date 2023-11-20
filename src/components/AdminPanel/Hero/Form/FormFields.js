import React, { useState } from "react";
import styles from "./FormHero.module.css";
import Alert from "../../Alert/Alert";
import AdminInput from "../../Input/AdminInput";
import ImageInput from "../../ImageInput/ImageInput";
import ErrorModal from "../../ErrorModal/ErrorModal";
import AdminButton from "../../UI/Button/AdminButton";
import { anyFieldTouched } from "../../../../heplers/anyFieldTouched";
import { ReactComponent as Close } from "../../../../assets/admin/common/close.svg";

const FormFields = ({
  values,
  handleBlur,
  touched,
  handleChange,
  errors,
  isValid,
  setFieldValue,
  setFieldTouched,
  id,
  isPostSuccess,
  isEditSuccess,
  setIsPostSuccess,
  setIsEditSuccess,
  post,
  edit,
  handleCancel,
  resetPreviewImg,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClear = (fieldName) => {
    setFieldValue(fieldName, "");
  };

  return (
    <>
      <div className={styles.wrapper}>
        {(isPostSuccess || isEditSuccess) && (
          <Alert
            active={isPostSuccess || isEditSuccess}
            setActive={(value) => {
              if (isPostSuccess) {
                setIsPostSuccess(value);
              } else {
                setIsEditSuccess(value);
              }
            }}
            type="success"
            title="Збережено!"
            message="Ваші зміни успішно збережено"
          />
        )}
        <div className={styles.data}>
          <div style={{ height: "68px", width: "737px" }}>
            <AdminInput
              id={"title"}
              value={values.title}
              variant={"admin"}
              error={touched.title ? errors.title : ""}
              onBlur={handleBlur}
              name={"title"}
              onChange={handleChange}
              placeholder={"Заголовок"}
              type={"text"}
              icon={id ? <Close onClick={() => handleClear("title")} /> : ""}
            />
          </div>
          <div style={{ height: "236px", width: "737px" }}>
            <AdminInput
              id={"description"}
              value={values.description}
              variant={"textarea"}
              error={touched.description ? errors.description : ""}
              name={"description"}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={"Підзаголовок"}
              type={"text"}
              icon={
                id ? <Close onClick={() => handleClear("description")} /> : ""
              }
            />
          </div>
          <ImageInput
            variant={"slide"}
            id={"image"}
            src={values.image}
            name={"image"}
            onChange={(img) => {
              setFieldValue("image", img).then(() =>
                setFieldTouched("image", true, true),
              );
            }}
            error={touched.image ? errors.image : ""}
            handleClear={handleClear}
            resetPreviewImg={resetPreviewImg}
          />
        </div>
        {(post.isError || edit.isError) && (
          <div>
            <ErrorModal
              message={`Не вдалось оновити данні. Спробуйте пізніше`}
            />
          </div>
        )}
        <div className={styles.buttons}>
          <AdminButton
            type={"button"}
            variant={"secondary"}
            onClick={() => setIsOpen(true)}
            disabled={!isValid || !anyFieldTouched(touched)}
          >
            Скасувати
          </AdminButton>
          <AdminButton
            type={"submit"}
            variant={"primary"}
            disabled={!isValid || !anyFieldTouched(touched)}
          >
            Додати
          </AdminButton>
        </div>
      </div>

      {isOpen && (
        <Alert
          title={"Скасувати зміни"}
          message={"Ви дійсно хочете скасувати зміни? Вони не будуть збережені"}
          setActive={setIsOpen}
          active={isOpen}
          successFnc={handleCancel}
        />
      )}
    </>
  );
};

export default FormFields;
