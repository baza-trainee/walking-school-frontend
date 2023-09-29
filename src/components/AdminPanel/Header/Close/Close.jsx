import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Icon } from "../../../../assets/admin/closeWhite.svg";
import style from "./Close.module.css";

/**
 * Close button
 *
 * @returns {React.JSX.Element} Close button of specified state
 */
const Close = (props) => {
  const { isSecondary, isDisabled } = props;
  const classes = [style.close];
  if (isSecondary) classes.push(style.close_secondary);
  if (isDisabled) classes.push(style.close_disabled);
  const className = classes.join(" ");
  return (
    <button className={className}>
      <Icon />
    </button>
  );
};

Close.propTypes = {
  isSecondary: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Close.defaultProps = {
  isSecondary: false,
  isDisabled: false,
};

export default Close;
