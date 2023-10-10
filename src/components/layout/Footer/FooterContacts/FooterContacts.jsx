import mail from "../../../../assets/main/footer/mail.svg";
import phone from "../../../../assets/main/footer/phone.svg";
import styles from "./FooterContacts.module.css";

export const FooterContacts = ({ email, phoneNumber }) => {
  return (
    <ul className={styles.contacts}>
      <li className={styles.contactsItem}>
        <img src={mail} alt="mail" />
        <a className={styles.contactsLink} href={`mailto:${email}`}>
          {email}
        </a>
      </li>
      <li className={styles.contactsItem}>
        <img src={phone} alt="phone" />
        <a className={styles.contactsLink} href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
      </li>
    </ul>
  );
};
