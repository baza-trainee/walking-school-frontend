import styles from "./ErrorMessage.module.css";

export const ErrorMessage = (props) => {
  const { message } = props;

  return <span className={styles.error}>{message}</span>;
};
