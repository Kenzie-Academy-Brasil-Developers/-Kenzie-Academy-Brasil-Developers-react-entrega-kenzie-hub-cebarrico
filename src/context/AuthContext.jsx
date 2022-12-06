import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  function login(data) {
    async function makeLogin() {
      try {
        const response = await api.post("sessions", data);

        const token = response.data.token;
        const id = response.data.user.id;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(id));
        navigate("/home");
      } catch (err) {
        toast.error("Usuario ou senha incorretos");
        console.log(err);
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
    <AuthContext.Provider value={{ login, registerRequest }}>
      {children}
    </AuthContext.Provider>
  );
};
