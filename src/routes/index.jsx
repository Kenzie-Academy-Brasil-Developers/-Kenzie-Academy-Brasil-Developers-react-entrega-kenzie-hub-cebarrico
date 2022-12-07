import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages/login";
import { ProtectRoute } from "../components/ProtectRoutes";
import { HomePage } from "../pages/home";
import { RegisterPage } from "../pages/register";
import { NotFound } from "../pages/404";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route element={<ProtectRoute />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
