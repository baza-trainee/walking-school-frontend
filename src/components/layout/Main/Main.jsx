import { Scroller } from "../../Scroller/Scroller";
import { Offerings } from "../../Offerings/Offerings";
import Projects from "../../Projects/Projects";
import { Contact } from "../../Contact/Contact";
import Requirements from "../../Requirements/Requirements";
import Participate from "../../Participate/Participate";
import FollowUsFacebook from "../../FollowUsFacebook/index.jsx";
import HeroSection from "../../HeroSection/index";
import Adventures from "../../Adventures/Adventures";
import { Partners } from "../../Partners/Partners";
import ScrollUp from "../../ScrollUp/ScrollUp";
import styles from "./Main.module.css";

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <HeroSection />
    <Adventures />
    <Offerings />
    <Scroller />
    <Projects />
    <Participate />
    <Requirements />
    <Partners />
    <FollowUsFacebook />
    <Contact />
    <ScrollUp />
  </main>
);

export default Main;
