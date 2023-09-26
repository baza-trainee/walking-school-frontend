import React from "react";
import Requirement from "./RequirementsElement/RequirementsElement";
import Container from "../layout/Container/Container";
import { useMedia } from "../../hooks/useMedia";
import smallImage from "../../assets/images/requirementsSmall.webp";
import mediumImage from "../../assets/images/requirementsMedium.webp";
import bigImage from "../../assets/images/requirementsBig.webp";
import style from "./Requirements.module.css";

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
  const { isDesktop, isMobile } = useMedia();
  const notMobileImage = isDesktop ? bigImage : mediumImage;
  return (
    <section data-testid="requirements" className={style.requirementsWrapper}>
      <Container>
        <div className={style.requirements}>
          {isMobile ? (
            <>
              <h2 className={style.requirements__heading}>Основні вимоги</h2>
              <div className={style.requirements__content}>
                <img
                  className={style.requirements__image}
                  src={smallImage}
                  loading="lazy"
                  alt="організатор з прапором україни на спині"
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
                loading="lazy"
                src={notMobileImage}
                alt="організатор з прапором україни на спині"
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Requirements;