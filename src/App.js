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
import Contacts from "./pages/AdminPanel/Contacts/Contacts";
import { AdminProjects } from "./pages/AdminPanel/AdminProjects/AdminProjects";
import { AddProject } from "./pages/AdminPanel/AdminProjects/AddProject/AddProject";
import { EditProject } from "./pages/AdminPanel/AdminProjects/EditProject/EditProject";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/admin" element={<MainAdmin />}>
        <Route path="contacts" element={<Contacts />} />
        <Route index path="projects" element={<AdminProjects />} />
        <Route path="projects/add" element={<AddProject />} />
        <Route path="projects/edit/:id" element={<EditProject />} />
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
