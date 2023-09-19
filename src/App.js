import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import { Scroller } from "./components/Scroller/Scroller";
import { Offerings } from "./components/Offerings/Offerings";
import "./App.module.css";

function App() {
  return (
    <div>
      <Scroller />
      <Header />
      <Offerings />
    </div>
  );
}

export default App;
