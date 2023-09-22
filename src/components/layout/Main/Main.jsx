import Adventures from "../../Adventures";
import { Scroller } from "../../Scroller/Scroller";
import { Offerings } from "../../Offerings/Offerings";
import ProjectSection from "../../ProjectSection/ProjectSection";
import { Contact } from "../../Contact/Contact";
import Requirements from "../../Requirements/Requirements";
// import { Partners } from "../../Partners/Partners";
import ParticipateSection from "../../ParticipateSection/ParticipateSection";
import { FollowUsFacebook } from "../../FollowUsFacebook/index.jsx";
import styles from "./Main.module.css";
import HeroSection from "../../Hero/index";

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <HeroSection />
    <Adventures />
    <Offerings />
    <Scroller />
    <ProjectSection />
    {/* <Partners /> */}
    <ParticipateSection />
    <Requirements />
    <FollowUsFacebook />
    <Contact />
  </main>
);

export default Main;
