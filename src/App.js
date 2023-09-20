import Header from "./components/Header/Header";
import { Scroller } from "./components/Scroller/Scroller";
import { Offerings } from "./components/Offerings/Offerings";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import "./App.module.css";
import ParticipateSection from "./components/ParticipateSection/ParticipateSection";

function App() {
  return (
    <div>
      <Header />
      <Offerings />
      <Scroller />
      <ProjectSection />
      <ParticipateSection />
    </div>
  );
}

export default App;
