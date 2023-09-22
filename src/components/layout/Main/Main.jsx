import Adventures from "../../Adventures";
import { Scroller } from "../../Scroller/Scroller";
import { Offerings } from "../../Offerings/Offerings";
import Projects from "../../Projects/Projects";
import { Contact } from "../../Contact/Contact";
import Requirements from "../../Requirements/Requirements";
// import { Partners } from "../../Partners/Partners";
import Participate from "../../Participate/Participate";
import { FollowUsFacebook } from "../../FollowUsFacebook/index.jsx";
import styles from "./Main.module.css";

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <Adventures />
    <Offerings />
    <Scroller />
    <Projects />
    {/* <Partners /> */}
    <Participate />
    <Requirements />
    <FollowUsFacebook />
    <Contact />
  </main>
);

export default Main;
