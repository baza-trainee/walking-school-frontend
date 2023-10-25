import React, { Fragment, useState } from "react";
import style from "./Projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useMedia } from "../../hooks/useMedia";
import Button from "../UI/Button/Button";
import SwiperSlider from "./Carousel/SwiperSlider";
import Container from "../layout/Container";
import { useQuery } from "@tanstack/react-query";
import { getAllCards, getProjectDesc } from "../../API/ProjectsAPI";
import DotsLoader from "../Loader/DotsLoader";
import CardLoading from "./ProjectCard/CardLoading";

const Projects = () => {
  const { isMobile } = useMedia();
  const {
    isLoading: isLoadingProjects,
    error: errorProjects,
    data: projects,
  } = useQuery(["projects"], () => getAllCards());

  const {
    isLoading: isLoadingDesc,
    error: errorDescription,
    data: description,
  } = useQuery(["projectsDesc"], () => getProjectDesc());

  const skeletonArr = Array.from({ length: 3 });
  const cardsToRender =
    isLoadingProjects || errorProjects ? skeletonArr : projects;

  return (
    <section id="projects" className={style.projectsWrapper}>
      <Container>
        <div className={style.projects}>
          <div className={style.projects__title}>
            <div>
              <h2>Проєкти</h2>
            </div>
            <div>
              {isLoadingDesc || errorDescription ? (
                <DotsLoader />
              ) : (
                <p>{description?.description}</p>
              )}
            </div>
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
                    {isLoadingProjects || errorProjects ? (
                      <CardLoading />
                    ) : (
                      <ProjectCard
                        image={item.image}
                        title={item.title}
                        dates={item.dates}
                        age={item.age_category}
                        description={item.description}
                        link={item.link}
                      />
                    )}
                  </Fragment>
                ))}
                {cardsToRender.length > 3 && (
                  <Button variant={"tertiary"} style={{ width: "100%" }}>
                    Дивитись більше
                  </Button>
                )}
              </div>
            ) : (
              <SwiperSlider
                items={cardsToRender}
                isLoading={isLoadingProjects || errorProjects}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
