import React, { useState } from "react";
import Alert from "../../../../components/AdminPanel/Alert/Alert";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import ErrorModal from "../../../../components/AdminPanel/ErrorModal/ErrorModal";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import { anyFieldTouched } from "../../../../heplers/anyFieldTouched";
import style from "./EditPartner.module.css";

const PartnerFormFields = ({
  values,
  handleBlur,
  touched,
  handleChange,
  errors,
  isValid,
  setFieldValue,
  setFieldTouched,
  isEditSuccess,
  setIsEditSuccess,
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
      <div>
        {isEditSuccess && (
          <Alert
            active={isEditSuccess}
            setActive={(value) => {
              setIsEditSuccess(value);
            }}
            type="success"
            title="Збережено!"
            message="Ваші зміни успішно збережено"
          />
        )}
        <div className={style.inputs}>
          <AdminInput
            id={"title"}
            value={values.title}
            error={touched.title ? errors.title : ""}
            onBlur={handleBlur}
            name={"title"}
            onChange={handleChange}
            variant="admin"
            placeholder="Назва"
            type={"text"}
          />
          <ImageInput
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
            variant="partner"
          />
        </div>
        {edit.isError && (
          <div>
            <ErrorModal
              message={`Не вдалось оновити данні. Спробуйте пізніше`}
            />
          </div>
        )}
        <div className={style.buttons}>
          <AdminButton
            type={"button"}
            style={{ width: "196px" }}
            variant={"secondary"}
            onClick={() => setIsOpen(true)}
            disabled={!isValid || !anyFieldTouched(touched)}
          >
            Скасувати
          </AdminButton>
          <AdminButton
            type={"submit"}
            variant={"primary"}
            style={{ width: "196px" }}
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

export default PartnerFormFields;
