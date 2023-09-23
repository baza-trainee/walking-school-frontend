import Container from "../layout/Container/Container";
import { TitleTemplate } from "../TitleTemplate/TitleTemplate";
import styles from "./Contact.module.css";
import { ContactForm } from "./ContactForm/ContactForm";

export const Contact = () => {
  return (
    <section className={styles.contactUs} id={"contacts"}>
      <Container>
        <div className={styles.content}>
          <TitleTemplate
            title="Зв’яжіться з нами"
            subtitle="Якщо у вас залишились питання можете написати нам. Ми завжди раді допомогти."
            className={styles.customClasses}
          />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};
