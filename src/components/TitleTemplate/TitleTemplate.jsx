import styles from "./TitleTemplate.module.css";

export const TitleTemplate = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="title-template">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{subtitle}</p>
    </div>
  );
};
