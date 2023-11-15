import React, { useState } from "react";
import styles from "./Hero.module.css";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate, useParams } from "react-router-dom";
import FormHero from "../../../components/AdminPanel/Hero/Form/FormHero";
import Alert from "../../../components/AdminPanel/Alert/Alert";

const HeroActions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    if (id) {
      setIsOpen(true);
    } else {
      navigate(-1);
    }
  };

  return (
    <div>
      <AdminHeader
        withClose={true}
        heading={id ? "Редагувати слайд" : "Додати слайд"}
        closeFunc={closeHandler}
      />
      <div className={styles.actions}>
        <FormHero id={id} />
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

export default HeroActions;
