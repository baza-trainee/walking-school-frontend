import React, { Fragment } from "react";
import style from "./Projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useMedia } from "../../hooks/useMedia";
import Button from "../UI/Button/Button";
import SwiperSlider from "./Carousel/SwiperSlider";
import Container from "../layout/Container";
import { useQuery } from "@tanstack/react-query";
import { getAllCards, getProjectDescription } from "../../API/projectsAPI";

const Projects = () => {
  const { isMobile } = useMedia();
  const { isLoading, data: cardsToRender } = useQuery(["projects"], () =>
    getAllCards(),
  );

  const { data: sectionDescription } = useQuery(["section-description"], () =>
    getProjectDescription(),
  );

  const description = sectionDescription
    ? sectionDescription
    : "Спробую навчити Вас ходити у незвичних умовах, та всьому що сам знаю. Ми вчитемося ходити у Польських Татрах";

  return (
    <section id="projects" className={style.projectsWrapper}>
      <Container>
        <div className={style.projects}>
          <div className={style.projects__title}>
            <div>
              <h2>Проєкти</h2>
            </div>
            <p>{description}</p>
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
                      age={item.age_category}
                      description={item.description}
                      isLoading={isLoading}
                      isActive={item.is_active}
                      url={item.url}
                    />
                  </Fragment>
                ))}
                {cardsToRender && cardsToRender.length > 3 && (
                  <Button variant={"tertiary"} style={{ width: "100%" }}>
                    Дивитись більше
                  </Button>
                )}
              </div>
            ) : (
              <SwiperSlider
                items={cardsToRender && cardsToRender}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
