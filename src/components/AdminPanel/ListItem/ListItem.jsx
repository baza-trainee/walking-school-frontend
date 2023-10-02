import React from "react";

import style from "./ListItem.module.css";

const ListItem = ({
  heading = "Назва",
  date = "",
  withStateColumn = false,
  state = "неактивний",
  navigateToEdit,
  deleteFunc,
}) => {
  return (
    <div className={style.listItem}>
      <div className={style.listItem__heading}>{heading}</div>
      <div className={style.listItem__content}>
        {withStateColumn ? (
          <div className={style.listItem__state}>{state}</div>
        ) : null}
        <div className={style.listItem__date}>{date}</div>
      </div>
      <div className={style.listItem__buttons}></div>
    </div>
  );
};

export default ListItem;
