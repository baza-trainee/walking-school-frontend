import React from "react";
import Container from "../Container"
import Adventure from "./Adventure/Adventure";
import Bungee from "../../assets/icons/BungeeJumping.svg";
import FlySpot from "../../assets/icons/FlySpot.svg";
import Parachuting from "../../assets/icons/Parachuting.svg";
import SkyWalk from "../../assets/icons/SkyWalk.svg";
import style from "./adventures.module.css";

const cards = [
  {image: FlySpot, alt: "parachute icon", text: "FlySpot"},
  {image: Bungee, alt: "a man jumping with a bungee rope", text: "Банджі джампінг"}, 
  {image: Parachuting, alt: "a man performing parachute jumping", text: "Стрибки з парашутом"}, 
  {image: SkyWalk, alt: "a man climbing upward", text: "SkyWalk"}];

const cardCollection = cards.map((card) => 
  <Adventure imageSrc={card.image} imageAlt={card.alt} text={card.text} />
);
/**
 * A collection of adventure blocks displaying activities
 * @component
 *
 * @returns {React.JSX.Element} a wrapper for a collection of adventure block cards with specified content
 */
const Adventures = () => {
  return (
    <Container>
      <div className={style.container}>
        {cardCollection}
    </div>
    </Container>
  );
}

export default Adventures;
