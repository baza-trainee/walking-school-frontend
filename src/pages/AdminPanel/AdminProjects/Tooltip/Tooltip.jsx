import styles from "./Tooltip.module.css";
import tooltip from "../../../../assets/admin/tooltip/tooltip.svg";

export const Tooltip = () => {
  return (
    <div className={styles.tooltip}>
      <img src={tooltip} alt="tooltip" className={styles.image} />
      <p className={styles.hint}>По замовчуванню дата обирається сьогоднішня</p>
    </div>
  );
};
