import styles from "./DateSelect.module.css";

export const InputArea = ({ value, onChange, label }) => (
  <div className={styles.entryArea}>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
      required
    />
    <div className={styles.labelLine}>{label}</div>
  </div>
);
