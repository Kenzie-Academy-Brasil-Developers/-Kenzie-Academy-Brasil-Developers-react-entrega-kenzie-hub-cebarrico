import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

// import { api } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

import { toast } from "react-toastify";

import { FormDefault } from "../../styles/form";
import { loginSchema } from "./LoginSchema";
import { ButtonDefault, ButtonDefaultBlack } from "../../styles/button";
import { InputDefault } from "../../styles/input";
import { Input } from "../../components/Inputs";

import logo from "../../assets/img/Logo.png";
import { LogoStyle } from "../../styles/logo";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // function login(data) {
  //   async function makeLogin() {
  //     try {
  //       const response = await api.post("sessions", data);

  //       const token = response.data.token;
  //       const id = response.data.user.id;
  //       localStorage.setItem("token", JSON.stringify(token));
  //       localStorage.setItem("user", JSON.stringify(id));
  //       navigate("/home");
  //     } catch (err) {
  //       toast.error("Usuario ou senha incorretos");
  //       console.log(err);
  //     }
  //   }
  //   makeLogin();
  // }

  return (
    <main style={{ height: "100vh" }}>
      <LogoStyle src={logo} alt="kenzie hub" />
      <FormDefault onSubmit={handleSubmit(login)}>
        <h1>Login</h1>

        <Input
          type="email"
          label="Email"
          placeholder="Digite seu e-mail"
          register={register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <Input
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <ButtonDefault type="submit">Entrar</ButtonDefault>
        <span>Ainda não possui uma conta?</span>
        <Link
          to={"/cadastro"}
          type="button"
          onClick={() => navigate("/cadastro")}
        >
          Cadastrar
        </Link>
      </FormDefault>
    </main>
  );
};
