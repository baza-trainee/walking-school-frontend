// import Adventures from "../../Adventures/Adventures";
import { Scroller } from "../../Scroller/Scroller";
import { Offerings } from "../../Offerings/Offerings";
// import Projects from "../../Projects/Projects";
// import { Contact } from "../../Contact/Contact";
// import Requirements from "../../Requirements/Requirements";
import Participate from "../../Participate/Participate";
// import { FollowUsFacebook } from "../../FollowUsFacebook/index.jsx";
// import HeroSection from "../../HeroSection/index";
import styles from "./Main.module.css";

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    {/* <HeroSection /> */}
    {/* <Adventures /> */}
    <Offerings />
    <Scroller />
    {/* <Projects /> */}
    {/* <Partners /> */}
    <Participate />
    {/* <Requirements /> */}
    {/* <FollowUsFacebook /> */}
    {/* <Contact /> */}
  </main>
);

export default Main;
