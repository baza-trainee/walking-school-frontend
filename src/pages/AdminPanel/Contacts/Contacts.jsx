import React, { useState } from "react";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import ContactsForm from "../../../components/AdminPanel/Contacts/ContactsForm";
import Alert from "../../../components/AdminPanel/Alert/Alert";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const onCloseHandler = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <AdminHeader
        withClose={true}
        heading="Редагувати контакти"
        closeFunc={onCloseHandler}
      />
      <ContactsForm />
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

export default Contacts;
