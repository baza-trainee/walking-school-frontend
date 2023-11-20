import logoMobile from "../../../assets/main/footer/logoMobile.svg";
import logoTablet from "../../../assets/main/footer/logoTablet.svg";
import logoDesktop from "../../../assets/main/footer/logoDesktop.svg";
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
