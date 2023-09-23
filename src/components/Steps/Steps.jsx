import React, { useEffect, useState } from "react";
import style from "./steps.module.css";

const Steps = ({ steps, labels }) => {
  const [animate, setAnimate] = useState(false);
  const stepArray = Array.from({ length: steps }, (_, i) => i + 1);
  useEffect(() => {
    const handleScroll = () => {
      const stepsElement = document.querySelector(
        `.${style["steps-container"]}`,
      );
      if (stepsElement) {
        const rect = stepsElement.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id={"steps"} className={style["steps-container"]}>
      <div className={style["progress-line"]}></div>
      {stepArray.map((step, index) => (
        <div
          key={index}
          className={`${style.step} ${animate ? style.animate : ""}`}
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
