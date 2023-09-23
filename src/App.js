import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";

import "./App.module.css";
import { Scroller } from "./components/Scroller/Scroller";
import { Footer } from "./components/layout/Footer/Footer";

function App() {
  return (
    <div>
      <Scroller />
      <Header />
      <Main />
      <Footer />
      {/* <NotFoundPage /> */}
    </div>
  );
}

export default App;
