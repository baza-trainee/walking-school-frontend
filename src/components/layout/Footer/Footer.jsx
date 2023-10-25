import React from "react";
import Container from "../Container/Container";
import linkedin from "../../../assets/main/footer/linkedin.svg";
import facebook from "../../../assets/main/footer/facebook.svg";
import styles from "./Footer.module.css";
import { useMedia } from "../../../hooks/useMedia";
import { FooterLinksList } from "./FooterLinksList/FooterLinksList";
import { SocialIconsList } from "./SocialIconsList/SocialIconsList";
import { FooterLogo } from "./FooterLogo";
import { FooterContacts } from "./FooterContacts/FooterContacts";
// import { useFooterContacts } from "../../../hooks/useFooterContacts";

export const Footer = () => {
  const { isDesktop, isMobile, isTablet } = useMedia();
  const footerLinks = [
    { href: "#projects", label: "Проєкти" },
    { href: "#gallery", label: "Галерея" },
  ];

  const socialIcons = [
    { href: "#facebook", src: facebook, alt: "facebook logo" },
    { href: "#linkedin", src: linkedin, alt: "linkedin logo" },
  ];

  // const { contacts, error, isLoading, isError } = useFooterContacts();

  const email = "email-address@gmail.com"; /* contacts.contact_email */
  const phoneNumber = "+380 67 568 1788"; /* contacts.phone */

  return (
    <footer>
      <Container>
        <div className={styles.content}>
          <div className={styles.mainBlock}>
            <FooterLogo />
            <FooterLinksList links={footerLinks} />
            {(isMobile || isDesktop) && (
              <FooterContacts email={email} phoneNumber={phoneNumber} />
            )}
            <SocialIconsList icons={socialIcons} />
          </div>
          <div className={styles.additionalInfo}>
            {isTablet && (
              <FooterContacts email={email} phoneNumber={phoneNumber} />
            )}
            <div className={styles.policy}>
              <a href="#privacy-policy" className={styles.policyItem}>
                Політика конфіденційності
              </a>
              <a href="#terms-of-service" className={styles.policyItem}>
                Правила користування сайтом
              </a>
            </div>
            <div className={styles.rights}>
              <p data-testid="rightText" className={styles.rightsItem}>
                Розробка Baza Trainee Ukraine 2023 {isMobile && <br></br>}© Всі
                права захищені.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
