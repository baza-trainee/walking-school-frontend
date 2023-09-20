import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import styles from "./CustomInput.module.css";

export const CustomInput = (props) => {
  const { type, text, placeholder, name, onChangeHandler, value, error } =
    props;

  if (type === "textarea") {
    return (
      <div>
        <textarea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChangeHandler}
          className={styles.textarea}
          style={{
            borderColor: error && "#f00631",
          }}
        ></textarea>
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div>
      <label
        htmlFor={name}
        className={styles.label}
        style={{
          color: error && "#f00631",
        }}
      >
        {text}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChangeHandler}
        id={type}
        style={{
          border: error && "1px solid #f00631",
        }}
      />
      <ErrorMessage message={error} />
    </div>
  );
};
