import React from "react";
import { ReactComponent as Icon } from "../../../assets/admin/upDownIcon.svg";

import style from "./SubHeader.module.css";

const SubHeader = ({ withState = false, sortFunc }) => {
  return (
    <div className={style.subHeader}>
      <div className={style.subHeader__heading}>Назва</div>
      <div className={style.subHeader__content}>
        {withState ? <div className={style.subHeader__state}>Стан</div> : null}
        <div role="button" onClick={sortFunc} onKeyDown={sortFunc} className={style.subHeader__button}>
          Дата Додавання
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
