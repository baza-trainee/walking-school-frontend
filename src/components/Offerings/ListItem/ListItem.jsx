import styles from "./ListItem.module.css";
import checkIcon from "../../../assets/main/offerings/check-circle-green.svg";

export const ListItem = (props) => {
  const { text } = props;

  return (
    <li className={styles.listItem}>
      <img src={checkIcon} alt="checkIcon" className={styles.listImg} />
      <p className={styles.text}>{text}</p>
    </li>
  );
};
