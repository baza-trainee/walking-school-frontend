import styles from "./ListItem.module.css";
import checkIcon from "../../../assets/images/check-circle-green.svg";

export const ListItem = (props) => {
  const { text } = props;

  return (
    <li className={styles.listItem}>
      <img src={checkIcon} alt="checkIcon" />
      <p className={styles.text}>{text}</p>
    </li>
  );
};
