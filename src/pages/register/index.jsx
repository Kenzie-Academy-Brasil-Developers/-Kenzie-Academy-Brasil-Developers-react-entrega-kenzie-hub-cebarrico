import { ButtonDefault } from "../../styles/button";
import { InputDefault } from "../../styles/input";
import logo from "../../assets/img/Logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./RegisterSchema";
import { FormDefault } from "../../styles/form";
import { Nav } from "../../styles/nav";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import "./register.css";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
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
    // console.log(data);
    makeRegister();
  }
  return (
    <main>
      <Nav>
        <img src={logo} alt="kenzie hub" />
        <button onClick={() => navigate("/")}>Voltar</button>
      </Nav>
      <FormDefault onSubmit={handleSubmit(registerRequest)}>
        <h1>Crie sua conta</h1>
        <span> Rapido e grátis, vamos nessa</span>
        <div>
          <label name="">Nome</label>
          <InputDefault
            type="text"
            placeholder="Coloque seu nome"
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
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
          <label name="">Senha</label>
          <InputDefault
            type="password"
            placeholder="Coloque sua senha"
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label name="passwordConfirmation">Confirme sua senha</label>
          <InputDefault type="password" placeholder="Coloque sua senha" />
          {errors.passwordConfirmation?.message && (
            <p>{errors.passwordConfirmation.message}</p>
          )}
        </div>
        <div>
          <label name="">Bio</label>
          <InputDefault
            type="text"
            placeholder="Coloque sua senha"
            {...register("bio")}
          />
          {errors.bio?.message && <p>{errors.bio.message}</p>}
        </div>
        <div>
          <label name="">Contato</label>
          <InputDefault
            type="text"
            placeholder="Coloque sua senha"
            {...register("contact")}
          />
          {errors.contact?.message && <p>{errors.contact.message}</p>}
        </div>
        <div>
          <label name="">Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="">Selecionar módulo</option>
            <option value="Primeiro modulo">Primeiro Módulo</option>
            <option value="Segundo modulo">Segundo Módulo</option>
            <option value="Terceiro modulo">Terceiro Módulo</option>
            <option value="Quarto modulo">Quarto Módulo</option>
            <option value="Quintp modulo">Quinto Módulo</option>
            <option value="Sexto modulo">Sexto Módulo</option>
          </select>
          {errors.course_module?.message && (
            <p>{errors.course_module.message}</p>
          )}
        </div>
        <ButtonDefault type="submit">Entrar</ButtonDefault>
      </FormDefault>
    </main>
  );
};
