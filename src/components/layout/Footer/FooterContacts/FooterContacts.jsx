import mail from "../../../../assets/main/footer/mail.svg";
import phone from "../../../../assets/main/footer/phone.svg";
import styles from "./FooterContacts.module.css";

export const FooterContacts = ({ email, phoneNumber }) => {
  return (
    <ul className={styles.contacts}>
      <li className={styles.contactsItem}>
        <img src={mail} alt="mail" />
        <p className={styles.contactsLink}>{email}</p>
      </li>
      <li className={styles.contactsItem}>
        <img src={phone} alt="phone" />
        <p className={styles.contactsLink}>{phoneNumber}</p>
      </li>
    </ul>
  );
};
