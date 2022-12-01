import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { NavHeader } from "../../components/Nav";
import { UserHeader } from "../../components/UserHeader";
import { UserMain } from "../../components/UserMain";

export const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    async function getUser() {
      try {
        const response = await api.get(`users/${currentUser}`);
        const user = response.data;
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  return (
    <main>
      <NavHeader path="login" />
      <UserHeader name={user.name} module={user.course_module} />
      <UserMain />
    </main>
  );
};
