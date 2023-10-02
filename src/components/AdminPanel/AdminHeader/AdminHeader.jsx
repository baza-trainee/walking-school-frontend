import searchImage from "../../../assets/images/search.svg";
import AdminButton from "../UI/Button/AdminButton";
import styles from "./AdminHeader.module.css";
import cross from "../../../assets/images/cross.svg";
import { useRef } from "react";

export const AdminHeader = ({ title, isAdd, setSearchTerm, searchTerm }) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.rightSide}>
        {isAdd ? (
          <>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Введіть ключове слово для пошуку"
                className={styles.input}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={inputRef}
              />
              <img
                src={searchImage}
                alt="search"
                className={styles.image}
                onClick={focusInput}
              />
            </div>
            <AdminButton children={"Додати"} variant="primary" />
          </>
        ) : (
          <img src={cross} alt="close" />
        )}
      </div>
    </div>
  );
};
