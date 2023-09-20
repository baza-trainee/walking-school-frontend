import React from "react";
import Container from "../../components/layout/Container/Container";
import Button from "../../components/UI/Button/Button";
import Image from "../../assets/images/404.svg";
import style from "./NotFoundPage.module.css";

/**
 * A page that is displayed when the page on current address doesn't exist or have been moved
 * @returns {React.JSX.Element}
 */
const NotFoundPage = () => {
  return (
    <Container>
      <section className={style.notFound}>
        <img src={Image} alt="not found" className={style.notFound__image} />
        <div className={style.notFound__main}>
          <div className={style.notFound__text}>
            <span className={style.notFound__number}>404</span>
            <div className={style.message}>
              <span className={style.message__primary}>
                Сторінка не знайдена
              </span>
              <span className={style.message__secondary}>
                Ми не змогли знайти сторінку, яку Ви шукаєте. Можливо, сталася
                помилка
              </span>
            </div>
          </div>
          <Button className={style.button} type="button">
            Повернутись на головну
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default NotFoundPage;
