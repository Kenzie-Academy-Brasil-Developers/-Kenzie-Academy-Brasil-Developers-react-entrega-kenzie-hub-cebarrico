import { FormDefault } from "../../styles/form";
import { ButtonDefault } from "../../styles/button";
import { InputDefault } from "../../styles/input";
import "./style.css";
import logo from "../../assets/img/Logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./LoginSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

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

  return (
    <main style={{ height: "100vh" }}>
      <img src={logo} alt="kenzie hub" />
      <FormDefault onSubmit={handleSubmit(login)}>
        <h1>Login</h1>
        <div>
          <label name="">Email</label>
          <InputDefault
            type="email"
            placeholder="Coloque seu email"
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label name="">Password</label>
          <InputDefault
            type="password"
            placeholder="Coloque sua senha"
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </div>
        <ButtonDefault type="submit">Entrar</ButtonDefault>
        <span>Ainda não possui uma conta?</span>
        <ButtonDefault type="button" onClick={() => navigate("/cadastro")}>
          Cadastrar
        </ButtonDefault>
      </FormDefault>
    </main>
  );
};
