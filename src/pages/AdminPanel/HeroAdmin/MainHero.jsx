import React, { useState } from "react";
import styles from "./Hero.module.css";
import NoHero from "../../../components/AdminPanel/Hero/NoHeroAdmin/NoHero";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import HeroBlock from "../../../components/AdminPanel/Hero/HeroBlock/HeroBlock";
import Alert from "../../../components/AdminPanel/Alert/Alert";

const MainHero = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const items = [
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
  ];
  return (
    <div>
      <AdminHeader
        heading={"Hero"}
        withButton={true}
        buttonFunc={() => navigate("add")}
      />
      <div className={styles.container}>
        {items ? (
          items.map((item) => (
            <React.Fragment key={item.id}>
              <HeroBlock
                image={item.img}
                title={item.title}
                subtitle={item.subtitle}
                removeHandler={() => setIsOpen(true)}
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
            successFnc={() => console.log("deleted")}
          />
        )}
      </div>
    </div>
  );
};

export default MainHero;
