import Main from "./components/layout/Main/Main";
import NotFoundPage from "./pages/404/NotFoundPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";

import "./App.module.css";
import Layout from "./components/layout/Layout/Layout";
import AdminLayout from "./components/layout/AdminLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="walking-school-frontend" element={<Main />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
