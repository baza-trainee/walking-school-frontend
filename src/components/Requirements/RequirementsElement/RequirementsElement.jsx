import React from "react";
import PropTypes from "prop-types";
import Check from "../../../assets/icons/checkCircle.svg";
import style from "./requirementsElement.module.css";

const Requirement = (props) => {
  const { text } = props;
  return (
    <div className={style.requirement}>
      <img className={style.requirement__icon} src={Check} alt="" />
      <div className={style.requirement__text}>
        <span>{text}</span>
      </div>
    </div>
  );
};

Requirement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Requirement;