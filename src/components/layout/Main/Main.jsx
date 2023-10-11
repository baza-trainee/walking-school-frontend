import React, { lazy } from "react";
import styles from "./Main.module.css";
const Hero = lazy(() => import("../../HeroSection/index"));
const Adventures = lazy(() => import("../../Adventures/Adventures"));
const Offerings = lazy(() =>
  import("../../Offerings/Offerings").then((module) => ({
    default: module.Offerings,
  })),
);
const Scroller = lazy(() =>
  import("../../Scroller/Scroller").then((module) => ({
    default: module.Scroller,
  })),
);
const Projects = lazy(() => import("../../Projects/Projects"));
const Participate = lazy(() => import("../../Participate/Participate"));
const Requirements = lazy(() => import("../../Requirements/Requirements"));
const Partners = lazy(() =>
  import("../../Partners/Partners").then((module) => ({
    default: module.Partners,
  })),
);
const FollowUsFacebook = lazy(() => import("../../FollowUsFacebook/index.jsx"));
const Contact = lazy(() =>
  import("../../Contact/Contact").then((module) => ({
    default: module.Contact,
  })),
);
const ScrollUp = lazy(() => import("../../ScrollUp/ScrollUp"));

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <Hero />
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
