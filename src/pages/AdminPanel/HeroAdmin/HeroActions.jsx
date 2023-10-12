import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate, useParams } from "react-router-dom";
import FormHero from "../../../components/AdminPanel/Hero/Form/FormHero";
import Alert from "../../../components/AdminPanel/Alert/Alert";
import { useQuery } from "@tanstack/react-query";
import { getHeroById } from "../../../API/hero";

const HeroActions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    if (id) {
      setIsOpen(true);
    } else {
      navigate(-1);
    }
  };
  // useEffect(() => {
  //   if (id) {
  //     getHeroData(Number(id))
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // }, [id])

  const { hero, loading, error } = useQuery({
    queryKey: ["hero"],
    queryFn: () => getHeroById(id),
    enabled: !!id,
  });

  return (
    <div>
      <AdminHeader
        withClose={true}
        heading={id ? "Редагувати слайд" : "Додати слайд"}
        closeFunc={closeHandler}
      />
      <div className={styles.actions}>
        <FormHero
          id={id}
          title={hero ? hero.title : data.title}
          subtitle={hero ? hero.description : data.description}
          image={hero ? hero.image : data.image}
        />
      </div>

      {isOpen && (
        <Alert
          title={"Залишити сторінку"}
          message={
            "Ви дійсно хочете залишити сторінку? Процес редагування буде втрачено"
          }
          setActive={setIsOpen}
          active={isOpen}
          successFnc={() => navigate(-1)}
        />
      )}
    </div>
  );
};

export default HeroActions;
