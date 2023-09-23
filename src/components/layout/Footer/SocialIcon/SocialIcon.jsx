import styles from "./SocialIcon.module.css";

export const SocialIcon = (props) => {
  const { href, src, alt } = props;

  return (
    <a href={href}>
      <img src={src} alt={alt} className={styles.img} />
    </a>
  );
};
