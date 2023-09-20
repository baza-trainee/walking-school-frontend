import React from "react";
import PropTypes from "prop-types";
import style from "./adventure.module.css";

/**
 * Component card for representing some activity included in the project
 * @component
 * @example
 * const image = "pathToImg/img"
 * const altText = "a man doing bungee jumping"
 * const text = "bungee jumping"
 * return (
 *     <Adventure imageSrc={image} imageAlt={altText} text={text} />
 * )
 * @returns {React.JSX.Element} react element with specified data
 */
const Adventure = props => {
  const { imageSrc, imageAlt, text } = props;
  return (
    <div className={style.card}>
      <div className={style.cardContent}>
        <img src={imageSrc} alt={imageAlt} className={style.cardImage} />
        <div className={style.cardName}>{text}</div>
      </div>
    </div>
  );
}

Adventure.propTypes = {
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
  text: PropTypes.string.isRequired,
};

export default Adventure;