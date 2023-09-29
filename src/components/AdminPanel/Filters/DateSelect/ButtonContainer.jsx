import styles from "./DateSelect.module.css";

export const ButtonContainer = ({ onCancel, onOk }) => (
  <div className={styles.buttonsContainer}>
    <button className={styles.button} onClick={onCancel}>
      Скасувати
    </button>
    <button className={styles.button} onClick={onOk}>
      OK
    </button>
  </div>
);
