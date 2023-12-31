import React from "react";
import PropTypes from "prop-types";
import Check from "../../../assets/main/requirements/checkCircle.svg";
import style from "./RequirementsElement.module.css";

const Requirement = (props) => {
  const { text } = props;
  return (
    <div data-testid="requirement" className={style.requirement}>
      <img className={style.requirement__icon} src={Check} alt="" />
      <span className={style.requirement__text}>{text}</span>
    </div>
  );
};

Requirement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Requirement;
