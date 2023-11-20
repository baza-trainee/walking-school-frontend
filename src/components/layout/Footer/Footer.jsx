import React from "react";
import Container from "../Container/Container";
import linkedin_img from "../../../assets/main/footer/linkedin.svg";
import facebook_img from "../../../assets/main/footer/facebook.svg";
import styles from "./Footer.module.css";
import { useMedia } from "../../../hooks/useMedia";
import { FooterLinksList } from "./FooterLinksList/FooterLinksList";
import { SocialIconsList } from "./SocialIconsList/SocialIconsList";
import { FooterLogo } from "./FooterLogo";
import { FooterContacts } from "./FooterContacts/FooterContacts";
import { useFooterContacts } from "../../../hooks/useFooterContacts";

const footerLinks = [
  { href: "#projects", label: "Проєкти" },
  { href: "#gallery", label: "Галерея" },
];

export const Footer = () => {
  const { isDesktop, isMobile, isTablet } = useMedia();

  const { contacts } = useFooterContacts();

  const {
    contact_email: email,
    phone: phoneNumber,
    facebook,
    linkedin,
  } = contacts?.[0] ?? {};

  const socialIcons = [
    { href: facebook, src: facebook_img, alt: "facebook logo" },
    { href: linkedin, src: linkedin_img, alt: "linkedin logo" },
  ];

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
                Розробка Baza Trainee Ukraine 2023 {isMobile && <br />}© Всі
                права захищені.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
