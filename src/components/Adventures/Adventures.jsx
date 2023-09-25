import React from "react";
import Container from "../layout/Container/Container";
import Adventure from "./Adventure/Adventure";
import Bungee from "../../assets/icons/BungeeJumping.svg";
import FlySpot from "../../assets/icons/FlySpot.svg";
import Parachuting from "../../assets/icons/Parachuting.svg";
import SkyWalk from "../../assets/icons/SkyWalk.svg";
import style from "./adventures.module.css";

const cards = [
  { image: FlySpot, alt: "іконка парашуту", text: "Тунельний політ" },
  {
    image: Bungee,
    alt: "іконка чоловічка, що стрибає з банджі",
    text: "Банджі джампінг",
  },
  {
    image: Parachuting,
    alt: "іконка чоловічка, що стрибає з парашутом",
    text: "Стрибки з парашутом",
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
