import modalCheck from "../../assets/images/modalCheck.svg";
import cross from "../../assets/images/close.svg";
import styles from "./Modal.module.css";
import { useEffect } from "react";

export const Modal = ({ isActive, setIsActive }) => {
  useEffect(() => {
    const headerWrapper = document.getElementById("header-wrapper");

    if (isActive) {
      headerWrapper.style.position = "sticky";
    } else {
      headerWrapper.style.position = "static";
    }

    return () => {
      headerWrapper.style.position = "";
    };
  }, [isActive]);

  const handleCloseModal = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.modal} onClick={handleCloseModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img
          src={cross}
          alt="close"
          className={styles.close}
          onClick={handleCloseModal}
        />
        <h2 className={styles.modalTitle}>Дякуємо!</h2>
        <p className={styles.message}>
          Ваше повідомлення надіслане. Наш менеджер зв’яжеться з вами найближчим
          часом
        </p>
        <img className={styles.img} src={modalCheck} alt="completed" />
      </div>
    </div>
  );
};
