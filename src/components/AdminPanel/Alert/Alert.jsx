import React, { useEffect } from "react";
import styles from "./Alert.module.css";
import Success from "./Success";
import Question from "./Question";

const Alert = ({
  type = "",
  message,
  title,
  active,
  setActive,
  successFnc,
}) => {
  const closeModal = () => {
    setActive(false);
  };

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [active]);

  let content;
  if (type === "success") {
    content = (
      <Success closeModal={closeModal} title={title} message={message} />
    );
  } else {
    content = (
      <Question
        closeModal={closeModal}
        title={title}
        message={message}
        successFnc={successFnc}
      />
    );
  }

  return (
    <>
      {active && (
        <>
          <div
            className={styles.backdropStyle}
            onClick={closeModal}
            data-testid="backdrop"
          />
          <div className={styles.modalStyle}>{content}</div>
        </>
      )}
    </>
  );
};

export default Alert;
