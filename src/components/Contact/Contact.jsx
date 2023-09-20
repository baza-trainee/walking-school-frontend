import Container from "../Container/Container";
import { TitleTemplate } from "../TitleTemplate/TitleTemplate";
import styles from "./Contact.module.css";
import { ContactForm } from "./ContactForm/ContactForm";

export const Contact = () => {
  return (
    <section className="contact-us">
      <Container>
        <div className={styles.content}>
          <TitleTemplate
            title="Зв’яжіться з нами"
            subtitle="Якщо у вас залишились питання можете написати нам. Ми завжди раді допомогти."
          />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};
