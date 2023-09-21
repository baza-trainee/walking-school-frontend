import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
// import NotFoundPage from "./pages/404/NotFoundPage";

import "./App.module.css";
import { Footer } from "./components/layout/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
{/* <NotFoundPage /> */}
    </div>
  );
}

export default App;
