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
import Login from "./pages/AdminPanel/Auth/Login/Login";
import ForgotPass from "./pages/AdminPanel/Auth/Forgot/ForgotPass";
import ResetPass from "./pages/AdminPanel/Auth/Reset/ResetPass";
import { AdminProjects } from "./pages/AdminPanel/AdminProjects/AdminProjects";
import { EditProject } from "./pages/AdminPanel/AdminProjects/EditProject/EditProject";
import { AddProject } from "./pages/AdminPanel/AdminProjects/AddProject/AddProject";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/admin/*" element={<MainAdmin />}>
        <Route path="projects" element={<AdminProjects />} />
        <Route path="projects/edit" element={<EditProject />} />
        <Route path="projects/add" element={<AddProject />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<ForgotPass />} />
      <Route path="/reset" element={<ResetPass />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
