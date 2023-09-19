import React from "react";
import style from "./card.module.css";
import Link from "../../Links/Link";
import { useMedia } from "../../../hooks/useMedia";

const ProjectCard = ({ image, title, dates, age, description }) => {
  const { isMobile, isTablet, isDesktop } = useMedia();
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
          <clipPath id="clip-path">
            {isMobile ? (
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0H49.6032C55.1122 0 59.9005 3.78211 61.1765 9.14123C61.3914 10.044 61.5 10.9688 61.5 11.8968V16.447C61.5 29.7225 72.2775 40.4762 85.553 40.4469L263.947 40.0531C277.223 40.0238 288 50.7775 288 64.053V172C288 185.255 277.255 196 264 196H24C10.7452 196 0 185.255 0 172V24Z"
                fill="#8D8BA7"
              />
            ) : isTablet ? (
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0H114.506C121.41 0 127.006 5.59644 127.006 12.5V16.1562C127.006 29.4111 137.751 40.1562 151.006 40.1562H328C341.255 40.1562 352 50.9014 352 64.1562V231C352 244.255 341.255 255 328 255H24C10.7452 255 0 244.255 0 231V24Z"
                fill="#8D8BA7"
              />
            ) : (
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0H114.5C118.918 0 122.5 3.58172 122.5 8L121.815 13.5683C120.053 27.878 131.217 40.5 145.635 40.5H343C356.255 40.5 367 51.2452 367 64.5V264C367 277.255 356.255 288 343 288H24C10.7452 288 0 277.255 0 264V24Z"
                fill="#8D8BA7"
              />
            )}
          </clipPath>
        </svg>
        <img src={image} alt={title} />
      </div>
      <div className={style.date}>
        <img src="/images/calendar.svg" alt="calendar" />
        {dates}
      </div>
      <div className={style.info}>
        <div className={style.data}>
          <h3>{title}</h3>
          <div className={style.data__age}>
            <img src="/images/age.svg" alt="age" />
            <p>{age} років</p>
          </div>
          <div>
            <p className={style.data__description}>{description}</p>
          </div>
        </div>
        <div className={style.join}>
          <Link to={"/dfdfdfdf"} variant={"small"} className={style.join__link}>
            Взяти участь
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
