import React from "react";
import { ReactComponent as Icon } from "../../../assets/admin/subheader/upDownIcon.svg";

import style from "./SubHeader.module.css";

const SubHeader = ({ withStateColumn = false, sortFunc }) => {
  return (
    <div data-testid="subHeader" className={style.subHeader}>
      <div className={style.subHeader__heading}>Назва</div>
      <div className={style.subHeader__content}>
        {withStateColumn ? (
          <div className={style.subHeader__state}>Стан</div>
        ) : null}
        <div
          role="button"
          onClick={sortFunc}
          onKeyDown={sortFunc}
          className={style.subHeader__button}
        >
          Дата Додавання
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
