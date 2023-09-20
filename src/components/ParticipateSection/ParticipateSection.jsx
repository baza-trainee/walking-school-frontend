import React from "react";
import Container from "../Container";
import style from "./participate.module.css";
import Steps from "../Steps/Steps";

const ParticipateSection = () => {
  return (
    <Container>
      <div className={style.participate}>
        <div className={style.participate__title}>
          <h2>Як взяти участь</h2>
          <p>
            Спробую навчити Вас ходити у незвичних умовах, та всьому що сам
            знаю. Ми вчитемося ходити у Польських Татрах{" "}
          </p>
        </div>
        <div className={style.participate__steps}>
          <Steps
            steps={4}
            labels={[
              "Зареєсструйтеся",
              "Заповніть анкету",
              "Дзвінок менеджера",
              "Початок подорожі",
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default ParticipateSection;