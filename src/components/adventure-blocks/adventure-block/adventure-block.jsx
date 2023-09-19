import React from "react"
import style from "./adventure-block.module.css"

export default function AdventureBlock(props) {
    const {imageSrc, imageAlt,  text} = props
    return (
        <div className={style.card}>
            <div className={style.cardContent}>
                <img src={imageSrc} alt={imageAlt} className={style.cardImage} />
                <div className={style.cardName}>
                    {text}
                </div>
            </div>
        </div>
    )
}