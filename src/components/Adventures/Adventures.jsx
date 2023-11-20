import React from "react";
import Container from "../layout/Container/Container";
import Adventure from "./Adventure/Adventure";
import Bungee from "../../assets/main/adventures/BungeeJumping.svg";
import Parachuting from "../../assets/main/adventures/FlySpot.svg";
import FlySpot from "../../assets/main/adventures/Parachuting.svg";
import SkyWalk from "../../assets/main/adventures/SkyWalk.svg";
import style from "./Adventures.module.css";

const cards = [
  { image: Parachuting, alt: "іконка парашуту", text: "Стрибки з парашутом" },
  {
    image: Bungee,
    alt: "іконка чоловічка, що стрибає з банджі",
    text: "Банджі джампінг",
  },
  {
    image: FlySpot,
    alt: "іконка чоловічка, що летить",
    text: "Тунельний політ",
  },
  {
    image: SkyWalk,
    alt: "іконка чоловічка, що підіймається угору з мотузкою",
    text: "Стежка у хмарах",
  },
];

const cardCollection = cards.map((card) => (
  <Adventure
    key={card.text}
    imageSrc={card.image}
    imageAlt={card.alt}
    text={card.text}
  />
));
/**
 * A collection of adventure blocks displaying activities
 * @component
 *
 * @returns {React.JSX.Element} a wrapper for a collection of adventure block cards with specified content
 */
const Adventures = () => {
  return (
    <Container>
      <div data-testid="adventures" className={style.container}>
        {cardCollection}
      </div>
    </Container>
  );
};

export default Adventures;
