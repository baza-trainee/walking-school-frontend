import logoMobile from "../../../assets/images/logoMobile.svg";
import logoTablet from "../../../assets/images/logoTablet.svg";
import logoDesktop from "../../../assets/images/logoDesktop.svg";
import styles from "./Footer.module.css";

const MIN_WIDTH_TABLET = 768;
const MIN_WIDTH_DESKTOP = 1440;

export const FooterLogo = () => {
  return (
    <div className={styles.logo}>
      <a href="/">
        <picture>
          <source
            media={`(min-width: ${MIN_WIDTH_DESKTOP}px)`}
            srcSet={logoDesktop}
          />
          <source
            media={`(min-width: ${MIN_WIDTH_TABLET}px)`}
            srcSet={logoTablet}
          />
          <img src={logoMobile} alt="logo" className={styles.logoImage} />
        </picture>
      </a>
    </div>
  );
};
