import React from "react";
import style from "./Projects.module.css";
import { useMedia } from "../../hooks/useMedia";
import Container from "../layout/Container";
import { useQuery } from "@tanstack/react-query";
import { getAllCards } from "../../API/projectsAPI";
import ProjectHeading from "./ProjectHeading/ProjectHeading";
import ProjectsMobile from "./MobileView/ProjectsMobile";
import SwiperSlider from "./Carousel/SwiperSlider";

const Projects = () => {
  const { isMobile } = useMedia();
  const { isLoading, data: cardsToRender } = useQuery(
    ["projects-client"],
    getAllCards,
  );

  return (
    <section id="projects" className={style.projectsWrapper}>
      <Container>
        <div className={style.projects}>
          <ProjectHeading />
          <div className={style.carousel}>
            {isMobile ? (
              <ProjectsMobile
                items={cardsToRender && cardsToRender}
                isLoading={isLoading}
              />
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
