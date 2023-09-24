import React from "react";
import styles from "./FooterLinksList.module.css";
import { FooterLink } from "../FooterLink/FooterLink";

export const FooterLinksList = ({ links }) => (
  <ul className={styles.list}>
    {links.map((link) => (
      <FooterLink href={link.href} key={link.href}>
        {link.label}
      </FooterLink>
    ))}
  </ul>
);
