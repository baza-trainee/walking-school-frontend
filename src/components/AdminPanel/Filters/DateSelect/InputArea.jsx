import { useState } from "react";
import styles from "./DateSelect.module.css";

export const InputArea = ({ value, onChange, label, id }) => {
  const [isActive, setIsActive] = useState(!!value);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(!!value);
  };

  return (
    <div className={styles.entryArea}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={id}
      />
      <label
        className={`${styles.labelLine} ${isActive ? styles.labelActive : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
