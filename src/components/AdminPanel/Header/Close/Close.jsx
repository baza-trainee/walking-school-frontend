import React from "react";
import { ReactComponent as Icon } from "../../../../assets/admin/closeWhite.svg";
import style from "./Close.module.css";

/**
 * Close button
 *
 * @returns {React.JSX.Element} Close button of specified state
 */
const Close = ({ isSecondary = false, isDisabled = false, ...props }) => {
  const classes = [style.close];
  if (isSecondary) classes.push(style.close_secondary);
  if (isDisabled) classes.push(style.close_disabled);
  const className = classes.join(" ");
  return (
    <button disabled={isDisabled} className={className} {...props}>
      <Icon data-testid="icon"/>
    </button>
  );
};

export default Close;
