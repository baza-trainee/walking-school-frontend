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
import Login from "./pages/AdminPanel/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/walking-school-frontend" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/admin" element={<MainAdmin />} />
      <Route path="/login" element={<Login />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
