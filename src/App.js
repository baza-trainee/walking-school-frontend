import Main from "./components/layout/Main/Main";
import NotFoundPage from "./pages/404/NotFoundPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.module.css";
import Layout from "./components/layout/Layout/Layout";
import MainAdmin from "./components/layout/AdminLayout/MainAdmin";
import AdminInput from "./components/AdminPanel/Input/AdminInput";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/input" element={<AdminInput />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/admin" element={<MainAdmin />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
