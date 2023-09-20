import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";

import "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <Header></Header>
<Routes>
  <Route path="/" element={<Main />} exact />
  <Route path="/gallery" element={<Gallery />} exact />
  <Route path="/*" element={<NotFoundPage />} exact />
</Routes>
<Footer /> */
}
