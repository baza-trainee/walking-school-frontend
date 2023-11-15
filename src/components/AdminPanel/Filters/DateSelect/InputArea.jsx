import styles from "./DateSelect.module.css";

export const InputArea = ({ value, onChange, label, id }) => {
  return (
    <div className={styles.entryArea}>
      <input
        type="date"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
      />
      <label
        className={`${styles.labelLine} ${styles.labelActive}`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
