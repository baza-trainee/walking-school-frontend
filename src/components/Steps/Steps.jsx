import React from "react";
import style from "./steps.module.css";

const Steps = ({ steps, labels }) => {
  const stepArray = Array.from({ length: steps }, (_, i) => i + 1);
  return (
    <div data-testid={"steps-container"} className={style["steps-container"]}>
      <div className={style["progress-line"]}></div>
      {stepArray.map((step, index) => (
        <div
          data-testid="step"
          key={index}
          className={style.step}
          style={{ animationDelay: `${0.9 * (index + 1)}s` }}
        >
          <div className={style.circle}>0{step}</div>
          {labels && <div className={style.label}>{labels[index]}</div>}
        </div>
      ))}
    </div>
  );
};

export default Steps;
