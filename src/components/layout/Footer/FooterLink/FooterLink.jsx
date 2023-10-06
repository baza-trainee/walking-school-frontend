import styles from "./FooterLink.module.css";

export const FooterLink = (props) => {
  const { href, children } = props;

  const handleClick = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      const position = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <li onClick={handleClick}>
      <a href={href} className={styles.link}>
        {children}
      </a>
    </li>
  );
};
