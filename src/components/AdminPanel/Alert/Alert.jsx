import React, { useEffect, useState } from "react";
import styles from "./Alert.module.css";
import Success from "./Success";
import Question from "./Question";

const Alert = ({ type, message, title, active = true }) => {
  const [isOpen, setIsOpen] = useState(active);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isOpen]);

  let content;
  if (type === "success") {
    content = (
      <Success closeModal={closeModal} title={title} message={message} />
    );
  } else {
    content = (
      <Question closeModal={closeModal} title={title} message={message} />
    );
  }

  return (
    <>
      {isOpen && (
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
