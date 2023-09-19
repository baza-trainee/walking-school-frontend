import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import "./App.module.css";
import { Scroller } from "./components/Scroller/Scroller";

function App() {
  return (
    <div>
      <Scroller />
      <Header />
    </div>
  );
}

export default App;
