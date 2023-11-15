import React, { useState } from "react";
import styles from "../../../../pages/AdminPanel/HeroAdmin/Hero.module.css";
import HeroBlock from "../HeroBlock/HeroBlock";
import NoHero from "../NoHeroAdmin/NoHero";
import Alert from "../../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllHeros } from "../../../../API/heroAPI";
import SpinnerLoader from "../../../Loader/SpinnerLoader";
import ErrorModal from "../../ErrorModal/ErrorModal";

const HeroList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Школа ходи",
      subtitle:
        "Наша Школа ходи для ветеранів - це не просто набір екстремальних пригод. Це потужний інструмент для відновлення та підвищення якості життя.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Школа ходи",
      subtitle:
        "Наша Школа ходи для ветеранів - це не просто набір екстремальних пригод. Це потужний інструмент для відновлення та підвищення якості життя.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Школа ходи",
      subtitle:
        "Наша Школа ходи для ветеранів - це не просто набір екстремальних пригод. Це потужний інструмент для відновлення та підвищення якості життя.",
    },
  ]);
  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading } = useQuery("heroList", getAllHeros, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className={styles.centered}>
        <SpinnerLoader />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorModal
        message={`Не вдалось завантажити зображення: ${error.message}. Спробуйте будь ласка пізніше.`}
        className={styles.centered}
      />
    );
  }

  const openModalHandler = (id) => {
    setSelectedHero(id);
    setIsOpen(true);
  };

  const onDelete = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className={styles.container}>
      {data ? (
        data.map((item) => (
          <React.Fragment key={item.id}>
            <HeroBlock
              id={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              removeHandler={() => openModalHandler(item.id)}
              editHandler={() => navigate(`edit/${item.id}`)}
            />
          </React.Fragment>
        ))
      ) : (
        <NoHero />
      )}
      {isOpen && (
        <Alert
          active={isOpen}
          setActive={setIsOpen}
          title={"Видалити слайд"}
          message={"Ви точно хочете видалити слайд?"}
          successFnc={() => onDelete(selectedHero)}
        />
      )}
    </div>
  );
};

export default HeroList;
