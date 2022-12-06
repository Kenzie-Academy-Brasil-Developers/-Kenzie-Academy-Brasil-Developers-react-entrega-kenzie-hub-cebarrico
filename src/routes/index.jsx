import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { NotFound } from "../pages/404";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};