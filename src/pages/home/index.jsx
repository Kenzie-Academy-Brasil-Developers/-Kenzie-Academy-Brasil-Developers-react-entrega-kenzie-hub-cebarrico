import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { TechProvider } from "../../context/TechContext";

import { NavHeader } from "../../components/Nav";
import { UserHeader } from "../../components/UserHeader";
import { UserMain } from "../../components/UserMain";

export const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  if (user) {
    return (
      <main>
        <NavHeader path="login" />
        <UserHeader name={user.name} module={user.course_module} />
        <TechProvider>
          <UserMain />
        </TechProvider>
      </main>
    );
  } else {
    navigate("/");
  }
};
