import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import styles from "./CustomInput.module.css";

export const CustomInput = (props) => {
  const {
    type,
    text,
    placeholder,
    name,
    onChangeHandler,
    value,
    error,
    required,
  } = props;

  if (type === "textarea") {
    return (
      <div className={styles.areaWrapper}>
        <textarea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChangeHandler}
          className={styles.textarea}
          style={{
            border: error && "1px solid #f00631",
          }}
        ></textarea>
        {error && <ErrorMessage message={error} />}
      </div>
    );
  }

  return (
    <div className={styles.inputWrapper}>
      <label
        htmlFor={name}
        className={`${styles.label}`}
        style={{
          color: error && "#f00631",
        }}
      >
        {text}
        {required && <span>*</span>}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChangeHandler}
        id={name}
        autoComplete="on"
        style={{
          border: error && "1px solid #f00631",
        }}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};
