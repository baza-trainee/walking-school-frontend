import React, { Fragment } from "react";
import style from "./projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useMedia } from "../../hooks/useMedia";
import Button from "../UI/Button/Button";
import SwiperSlider from "./Carousel/SwiperSlider";

const ProjectSection = () => {
  // eslint-disable-next-line no-unused-vars
  const { isMobile, isTablet, isDesktop } = useMedia();
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
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {items?.slice(0, 3).map((item, index) => (
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
            <Button
              variant={"tertiary"}
              disabled={true}
              style={{ width: "100%" }}
            >
              Дивитись більше
            </Button>
          </div>
        ) : (
          <SwiperSlider items={items} />
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
