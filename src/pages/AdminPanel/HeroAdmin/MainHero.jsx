import React, { useState } from "react";
import styles from "./Hero.module.css";
import NoHero from "../../../components/AdminPanel/Hero/NoHeroAdmin/NoHero";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import HeroBlock from "../../../components/AdminPanel/Hero/HeroBlock/HeroBlock";
import Alert from "../../../components/AdminPanel/Alert/Alert";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getHero, deleteHero } from "../../../API/hero";

const MainHero = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState("");

  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  //     title: "Школа ходи",
  //     subtitle:
  //       "Наша Школа ходи для ветеранів - це не просто набір екстремальних пригод. Це потужний інструмент для відновлення та підвищення якості життя.",
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  //     title: "Школа ходи",
  //     subtitle:
  //       "Наша Школа ходи для ветеранів - це не просто набір екстремальних пригод. Це потужний інструмент для відновлення та підвищення якості життя.",
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.unsplash.com/photo-1696509528129-c28dc0308733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  //     title: "Школа ходи",
  //     subtitle:
  //       "Наша Школа ходи для ветеранів - це не просто набір екстремальних пригод. Це потужний інструмент для відновлення та підвищення якості життя.",
  //   },
  // ];

  const { isLoading, error, data } = useQuery({
    queryKey: ["hero"],
    queryFn: getHero,
  });

  const mutation = useMutation(deleteHero, {
    onSuccess: () => QueryClient.invalidateQueries(["hero"]),
  });

  const deleteFunc = (id) => {
    console.log(id)
    mutation.mutate(id);
  };
  return (
    <div>
      <AdminHeader
        heading={"Hero"}
        withButton={true}
        buttonFunc={() => navigate("add")}
      />
      <div className={styles.container}>
        {data ? (
          data.map((item) => (
            <React.Fragment key={item.id}>
              <HeroBlock
                image={item.img}
                title={item.title}
                subtitle={item.subtitle}
                removeHandler={() => {
                  setIsOpen(true);
                  setCurrentId(item.id);
                }}
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
            successFnc={() => deleteFunc(currentId)}
          />
        )}
      </div>
    </div>
  );
};

export default MainHero;
