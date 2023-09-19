import React from "react";
import PropTypes from "prop-types";
import style from "./container.module.css";

/**
 * A wrapper for page content
 * @element
 * @returns {React.JSX.Element} react element wrapped inside if this component
 */
export default function Container(props) {
  const { children, leftRightPadding, topBottomPadding } = props;
  const horizontalPadding = `${leftRightPadding}%`;
  const verticalPadding = `${topBottomPadding}%`;
  const padding = verticalPadding + horizontalPadding;
  return (
    <div style={{ padding: padding }} className={style.container}>
      {children}
    </div>
  );
}

Container.propTypes = {
  /**
   * a content of the container
   */
  children: PropTypes.elementType.isRequired,
  /**
   * padding size on the right and left sides in %, default equals to 0
   */
  leftRightPadding: PropTypes.number,
  /**
   * padding size on top and bottom in %, default equals to 0
   */
  topBottomPadding: PropTypes.number,
};

Container.defaultProps = {
  leftRightPadding: 0,
  topBottomPadding: 0,
};
