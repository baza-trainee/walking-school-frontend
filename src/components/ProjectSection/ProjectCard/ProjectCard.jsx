import React from "react";
import style from "./card.module.css";
import Link from "../../Links/Link";

const ProjectCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
          <clipPath id="clip-path">
            <path
              d="M0 24C0 10.7452 10.7452 0 24 0H49.6032C55.1122 0 59.9005 3.78211 61.1765 9.14123C61.3914 10.044 61.5 10.9688 61.5 11.8968V16.447C61.5 29.7225 72.2775 40.4762 85.553 40.4469L263.947 40.0531C277.223 40.0238 288 50.7775 288 64.053V172C288 185.255 277.255 196 264 196H24C10.7452 196 0 185.255 0 172V24Z"
              fill="#8D8BA7"
            />
          </clipPath>
        </svg>
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
      <div className={style.date}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 2V6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 2V6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 10H21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        вересень - листопад
      </div>
      <div className={style.info}>
        <div className={style.data}>
          <h3>FlySport</h3>
          <div className={style.data__age}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>18-60 років</p>
          </div>
          <div>
            <p className={style.data__description}>
              політ у колбі під потоком вітру який бʼє знизу, з інструктором
              політ у колбі під потоком вітру який бʼє знизу, з інструктором
            </p>
          </div>
        </div>
        <div className={style.join}>
          <Link to={"/dfdfdfdf"} variant={"small"}>
            Взяти участь
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
