import Main from "./components/layout/Main/Main";
import NotFoundPage from "./pages/404/NotFoundPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

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
import AdminPartners from "./pages/AdminPanel/AdminPartners/AdminPartners";
import AddPartner from "./pages/AdminPanel/AdminPartners/AddPartner/AddPartner";
import EditPartner from "./pages/AdminPanel/AdminPartners/EditPartner/EditPartner";
import AdminFacebook from "./pages/AdminPanel/AdminFacebook/AdminFacebook";
import MainHero from "./pages/AdminPanel/HeroAdmin/MainHero";
import HeroActions from "./pages/AdminPanel/HeroAdmin/HeroActions";
import ProtectedRoute from "./pages/AdminPanel/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/admin" element={<MainAdmin />}>
          <Route path="hero" element={<MainHero />} />
          <Route path="hero/add" element={<HeroActions />} />
          <Route path="hero/edit/:id" element={<HeroActions />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/add" element={<AddProject />} />
          <Route path="projects/edit" element={<EditProject />} />
          <Route path="projects/edit/:id" element={<AddProject />} />
          <Route path="partners" element={<AdminPartners />} />
          <Route path="partners/add" element={<AddPartner />} />
          <Route path="partners/edit/:id" element={<EditPartner />} />
          <Route path="facebook" element={<AdminFacebook />} />
        </Route>
      {/* </Route> */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<ForgotPass />} />
      <Route path="/reset" element={<ResetPass />} />
    </>,
  ),
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
