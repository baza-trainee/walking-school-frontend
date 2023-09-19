import React from "react"
import AdventureBlock from "./adventure-block/adventure-block"
import Bungee from "../../assets/icons/BungeeJumping.svg"
import FlySpot from "../../assets/icons/FlySpot.svg"
import Parachuting from "../../assets/icons/Parachuting.svg"
import SkyWalk from "../../assets/icons/SkyWalk.svg"
import style from "./adventure-blocks.module.css"


export default function AdventureBlocks() {
    return (
        <div className={style.container}>
            <AdventureBlock imageSrc={FlySpot} text="FlySpot"/>
            <AdventureBlock imageSrc={Bungee} text="Банджі джампінг"/>
            <AdventureBlock imageSrc={Parachuting} text="Стрибки з парашутом"/>
            <AdventureBlock imageSrc={SkyWalk} text="SkyWalk"/>
        </div>
    )
}