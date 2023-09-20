import React from "react";
import Container from "../../components/layout/Container/Container";
import Button from "../../components/UI/Button/Button";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Container>
      <section className={style.notFound}>
        <div className={style.notFound__content}>
          <span className={style.notFound__number}>
            404
          </span>
          <div className={style.notFound__text}>
            <span className={style.notFound__mainMessage}>
              Сторінка не знайдена
            </span>
            <span className={style.notFound__secondaryMessage}>
              Ми не змогли знайти сторінку, яку Ви шукаєте. Можливо, сталася помилка
            </span>
          </div>          
          <Button className={style.returnButton} type="button">Повернутись на головну</Button>
        </div>
      </section>
    </Container>
  )
};

export default NotFoundPage;