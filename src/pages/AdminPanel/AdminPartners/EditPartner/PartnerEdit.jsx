import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import Alert from "../../../../components/AdminPanel/Alert/Alert";
import FormPartners from "./FormPartners";
import style from "./EditPartner.module.css";

const PartnerEdit = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <AdminHeader
        withClose={true}
        heading={"Редагувати партнера"}
        closeFunc={() => {
          setIsOpen(true);
        }}
      />
      <div className={style.page__content}>
        <FormPartners id={id} />
      </div>

      {isOpen && (
        <Alert
          title={"Залишити сторінку"}
          message={
            "Ви дійсно хочете залишити сторінку? Процес редагування буде втрачено"
          }
          setActive={setIsOpen}
          active={isOpen}
          successFnc={() => navigate("/admin")}
        />
      )}
    </div>
  );
};

export default PartnerEdit;
