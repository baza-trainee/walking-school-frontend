import React from "react";
import { ReactComponent as EditIcon } from "../../../assets/admin/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/admin/trashbin.svg";

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
    <div data-testid="listItem" className={style.listItem}>
      <div className={style.listItem__heading}>{heading}</div>
      <div className={style.listItem__content}>
        {withStateColumn ? (
          <div className={style.listItem__state}>{state}</div>
        ) : null}
        <div className={style.listItem__date}>{date}</div>
      </div>
      <div className={style.listItem__buttons}>
        <div
          data-testid="editButton"
          className={style.button}
          onClick={navigateToEdit}
          role="button"
        >
          <EditIcon />
        </div>
        <div
          data-testid="deleteButton"
          className={style.button}
          onClick={deleteFunc}
          role="button"
        >
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
