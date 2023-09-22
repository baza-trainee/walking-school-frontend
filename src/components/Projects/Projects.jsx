import React, { Fragment, useState } from "react";
import style from "./Projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useMedia } from "../../hooks/useMedia";
import Button from "../UI/Button/Button";
import SwiperSlider from "./Carousel/SwiperSlider";
const items = [
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "FlySport 1",
    dates: "вересень - жовтень",
    age: "18-60",
    description:
      "політ у колбі під потоком вітру який бʼє знизу, з інструктором політ у колбі під потоком вітру який бʼє знизу, з інструктором",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "FlySport 2",
    dates: "вересень - жовтень",
    age: "18-60",
    description:
      "політ у колбі під потоком вітру який бʼє знизу, з інструктором політ у колбі під потоком вітру який бʼє знизу, з інструктором",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "FlySport 3",
    dates: "вересень - жовтень",
    age: "18-60",
    description:
      "політ у колбі під потоком вітру який бʼє знизу, з інструктором політ у колбі під потоком вітру який бʼє знизу, з інструктором",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "FlySport 4",
    dates: "вересень - жовтень",
    age: "18-60",
    description:
      "політ у колбі під потоком вітру який бʼє знизу, з інструктором політ у колбі під потоком вітру який бʼє знизу, з інструктором",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "FlySport 5",
    dates: "вересень - жовтень",
    age: "18-60",
    description:
      "політ у колбі під потоком вітру який бʼє знизу, з інструктором політ у колбі під потоком вітру який бʼє знизу, з інструктором",
  },
];
const Projects = () => {
  // eslint-disable-next-line no-unused-vars
  const { isMobile } = useMedia();
  const [cards, setCards] = useState(items);
  const cardsToRender = cards;

  return (
    <section className={style.projects}>
      <div className={style.projects__title}>
        <div>
          <h2>Проєкти</h2>
        </div>
        <p>
          Спробую навчити Вас ходити у незвичних умовах, та всьому що сам знаю.
          Ми вчитемося ходити у Польських Татрах Спробую навчити
        </p>
      </div>

      <div className={style.carousel}>
        {isMobile ? (
          <div
            data-testid={"mobile-slider"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {cardsToRender?.slice(0, 3).map((item, index) => (
              <Fragment key={index}>
                <ProjectCard
                  image={item.image}
                  title={item.title}
                  dates={item.dates}
                  age={item.age}
                  description={item.description}
                />
              </Fragment>
            ))}
            {cardsToRender.length > 3 && (
              <Button variant={"tertiary"} style={{ width: "100%" }}>
                Дивитись більше
              </Button>
            )}
          </div>
        ) : (
          <SwiperSlider items={cardsToRender} />
        )}
      </div>
    </section>
  );
};

export default Projects;
