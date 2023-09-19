import React from "react"
import PropTypes from "prop-types"
import style from "./adventure-block.module.css"

/**
 * Component card for representing some activity included in the project
 * @component
 * @example
 * const image = "pathToImg/img"
 * const altText = "a man doing bungee jumping"
 * const text = "bungee jumping"
 * return (
 *     <AdventureBlock imageSrc={image} imageAlt={altText} text={text} />
 * )
 * @returns 
 */
export default function AdventureBlock(props) {
    const {imageSrc, imageAlt, text} = props
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

AdventureBlock.propTypes = {
    /**
     * source of the displayed image
     */
    imageSrc: PropTypes.string.isRequired,
    /**
     * alternative description of displayed image
     */
    imageAlt: PropTypes.string.isRequired,
    /**
     * displayed text, name of the displayed activity
     */
    text: PropTypes.string.isRequired
}