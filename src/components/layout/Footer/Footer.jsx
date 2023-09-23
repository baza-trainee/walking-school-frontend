import React from "react";
import Container from "../Container/Container";
import logoMobile from "../../../assets/images/logoMobile.png";
import logoTablet from "../../../assets/images/logoTablet.png";
import logoDesktop from "../../../assets/images/logoDesktop.png";
import linkedin from "../../../assets/images/linkedin.svg";
import facebook from "../../../assets/images/facebook.svg";
import styles from "./Footer.module.css";
import { FooterLink } from "./FooterLink/FooterLink";
import { SocialIcon } from "./SocialIcon/SocialIcon";

export const Footer = () => {
  const footerLinks = [
    { href: "#projects", label: "Проєкти" },
    { href: "#gallery", label: "Галерея" },
    { href: "#contacts", label: "Контакти" },
  ];

  const socialIcons = [
    { href: "#facebook", src: facebook, alt: "facebook logo" },
    { href: "#linkedin", src: linkedin, alt: "linkedin logo" },
  ];

  return (
    <footer>
      <Container>
        <div className={styles.content}>
          <div className={styles.mainBlock}>
            <div className={styles.logo}>
              <a href="/">
                <picture>
                  <source media="(min-width: 1440px)" srcSet={logoDesktop} />
                  <source media="(min-width: 768px)" srcSet={logoTablet} />
                  <img
                    src={logoMobile}
                    alt="logo"
                    className={styles.logoImage}
                  />
                </picture>
              </a>
            </div>
            <ul className={styles.list}>
              {footerLinks.map((link) => (
                <FooterLink href={link.href} key={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
            <div className={styles.credentials}>
              {socialIcons.map((icon) => (
                <SocialIcon {...icon} key={icon.href} />
              ))}
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <div className={styles.policy}>
              <a href="#privacy-policy" className={styles.policyItem}>
                Політика конфіденційності
              </a>
              <a href="#terms-of-service" className={styles.policyItem}>
                Правила користування сайтом
              </a>
            </div>
            <div className={styles.rights}>
              <p className={styles.rightsItem}>
                Розробка Baza Trainee Ukraine 2023© Всі права захищені.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
