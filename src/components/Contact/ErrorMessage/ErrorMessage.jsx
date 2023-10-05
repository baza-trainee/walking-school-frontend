import styles from "./ErrorMessage.module.css";

export const ErrorMessage = (props) => {
  const { message } = props;

  return <div className={styles.error}>{message}</div>;
};
