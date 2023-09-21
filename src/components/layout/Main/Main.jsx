import Adventures from "../../Adventures";
import { Scroller } from "../../Scroller/Scroller";
import { Offerings } from "../../Offerings/Offerings";
import ProjectSection from "../../ProjectSection/ProjectSection";
import { Contact } from "../../Contact/Contact";
import styles from "./Main.module.css";
import ParticipateSection from "../../ParticipateSection/ParticipateSection";
import { FollowUsFacebook } from "../../FollowUsFacebook/FollowUsFacebook";

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <Adventures />
    <Offerings />
    <Scroller />
    <ProjectSection />
    <ParticipateSection />
    <FollowUsFacebook />
    <Contact />
  </main>
);

export default Main;
