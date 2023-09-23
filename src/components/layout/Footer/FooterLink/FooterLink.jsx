import styles from "./FooterLink.module.css";

export const FooterLink = (props) => {
  const { href, children } = props;
  return (
    <li>
      <a href={href} className={styles.link}>
        {children}
      </a>
    </li>
  );
};
