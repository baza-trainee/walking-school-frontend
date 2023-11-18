import React, { useState } from "react";
import styles from "../../../../pages/AdminPanel/HeroAdmin/Hero.module.css";
import HeroBlock from "../HeroBlock/HeroBlock";
import NoHero from "../NoHeroAdmin/NoHero";
import Alert from "../../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteHero, getAllHeros } from "../../../../API/heroAPI";
import SpinnerLoader from "../../../Loader/SpinnerLoader";
import ErrorModal from "../../ErrorModal/ErrorModal";

const HeroList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery("heroList", getAllHeros, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(deleteHero, {
    onSuccess: () => {
      queryClient.invalidateQueries("heroList");
    },
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
    mutate(id);
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
              subtitle={item.description}
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
