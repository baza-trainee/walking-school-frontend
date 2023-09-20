import React from "react";
import style from "./steps.module.css";

const Steps = ({ steps, labels }) => {
  const stepArray = Array.from({ length: steps }, (_, i) => i + 1);
  return (
    <div className={style["steps-container"]}>
      <div className={style["progress-line"]}></div>
      {stepArray.map((step, index) => (
        <div
          key={index}
          className={style.step}
          style={{ animationDelay: `${0.9 * (index + 1)}s` }}
        >
          <div className={style.circle}>0{step}</div>
          {labels && <h3 className={style.label}>{labels[index]}</h3>}
        </div>
      ))}
    </div>
  );
};

export default Steps;
