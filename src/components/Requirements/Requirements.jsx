import React from "react";
import Requirement from "./RequirementsElement/RequirementsElement";
import Container from "../layout/Container/Container";
import style from "./Requirements.module.css";
import { useMedia } from "../../hooks/useMedia";

const listItems = [
  { text: "Бажання" },
  { text: "Біометричний закордонний паспорт" },
  { text: "Оформлена група інвалідності (для виїзду закордон)" },
  { text: "У тебе вже має бути протез" },
  { text: "Твоя вага має бути меншою за 95кг" },
  {
    text: "Відсутність протипоказань щодо вказаних вище екстримальних заходів",
  },
];

const listElements = listItems.map((element) => (
  <Requirement text={element.text} key={element.text} />
));

const Requirements = () => {
  const { isMobile } = useMedia();
  return (
    <Container>
      <section className={style.requirements}>
        {isMobile ? (
          <>
            <h2 className={style.requirements__heading}>Основні вимоги</h2>
            <div className={style.requirements__content}>
              <img
                className={style.requirements__image}
                src="https://picsum.photos/200"
                alt="insert alt"
              />
              <div className={style.requirements__list}>{listElements}</div>
            </div>
          </>
        ) : (
          <>
            <div className={style.requirements__text}>
              <h2 className={style.requirements__heading}>Основні вимоги</h2>
              <div className={style.requirements__list}>{listElements}</div>
            </div>
            <img
              className={style.requirements__image}
              src="https://picsum.photos/200"
              alt="insert alt"
            />
          </>
        )}
      </section>
    </Container>
  );
};

export default Requirements;
