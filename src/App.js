import Header from "./components/Header/Header";
// import Button from "./components/Button/Button";
import { Scroller } from "./components/Scroller/Scroller";
import { Offerings } from "./components/Offerings/Offerings";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import "./App.module.css";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Offerings />
      <Scroller />
      <ProjectSection />
      <Contact />
    </div>
  );
}

export default App;
