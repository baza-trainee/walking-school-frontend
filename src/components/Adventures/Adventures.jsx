import React from "react";
import Adventure from "./Adventure-block/Adventure";
import Bungee from "../../assets/icons/BungeeJumping.svg";
import FlySpot from "../../assets/icons/FlySpot.svg";
import Parachuting from "../../assets/icons/Parachuting.svg";
import SkyWalk from "../../assets/icons/SkyWalk.svg";
import style from "./adventure-blocks.module.css";

/**
 * A collection of adventure blocks displaying activities
 * @component
 *
 * @returns {React.JSX.Element} a wrapper for a collection of adventure block cards with specified content
 */
export default function Adventures() {
  return (
    <div className={style.container}>
      <Adventure imageSrc={FlySpot} text="FlySpot" />
      <Adventure imageSrc={Bungee} text="Банджі джампінг" />
      <Adventure imageSrc={Parachuting} text="Стрибки з парашутом" />
      <Adventure imageSrc={SkyWalk} text="SkyWalk" />
    </div>
  );
}
