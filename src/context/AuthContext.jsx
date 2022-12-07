import { createContext, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [techs, setTech] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setTech(data.techs);

        setUser(data);
      } catch (error) {
        console.log(error);
        console.log(token);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  function login(data) {
    async function makeLogin() {
      try {
        const response = await api.post("sessions", data);
        const { token, user: userResponse } = response.data;

        setUser(userResponse);
        localStorage.setItem("token", token);
        const toNavigate = location.state?.from?.pathname || "/home";
        navigate(toNavigate, { replace: true });
      } catch (err) {
        toast.error("Usuario ou senha incorretos");
        console.error(err);
      }
    }
    makeLogin();
  }

  function registerRequest(data) {
    async function makeRegister() {
      try {
        const response = await api.post("users", data);
        toast.success("Conta criada com sucesso!");

        navigate("/");
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }

    makeRegister();
  }
  return (
    <AuthContext.Provider
      value={{ login, registerRequest, user, loading, techs, setTech }}
    >
      {children}
    </AuthContext.Provider>
  );
};
