import React from "react";
import style from "./steps.module.css";

const Steps = ({ steps, labels }) => {
  return (
    <div className={style.steps}>
      {Array.from({ length: steps }).map((_, index) => (
        <div className={style["step-container"]}>
          <div className={style.step}>{index + 1}</div>
          <span className={style["step-label"]}>{labels[index]}</span>
          {index < steps - 1 && <div className={style.line}></div>}
        </div>
      ))}
    </div>
  );
};

export default Steps;
