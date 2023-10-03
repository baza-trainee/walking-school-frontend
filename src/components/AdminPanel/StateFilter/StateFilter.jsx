import React from "react";

import style from "./StateFilter.module.css";

const StateFilter = ({ setFilter }) => {
  return (
    <div className={style.filter}>
      <select
        data-testid = "filter"
        name="stateFilter"
        onChange={(e) => setFilter(e.target.value)}
        className={style.filter__select}
      >
        <option value="all" className={style.filter__option}>
          Всі
        </option>
        <option value="Активний" className={style.filter__option}>
          Активний
        </option>
        <option value="Неактивний" className={style.filter__option}>
          Неактивний
        </option>
      </select>
    </div>
  );
};

export default StateFilter;
