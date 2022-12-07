import { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export const ProtectRoute = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }

  return user ? <Outlet /> : navigate("/");
};
