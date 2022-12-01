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
import { Input } from "../../components/Inputs";

import "./register.css";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
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
        <Input
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          register={register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}

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

        <Input
          type="password"
          label="Confirme sua senha"
          placeholder="Confirme sua senha"
          register={register("passwordConfirmation")}
        />
        {errors.passwordConfirmation?.message && (
          <p>{errors.passwordConfirmation.message}</p>
        )}

        <Input
          type="text"
          label="Bio"
          placeholder="Digite sua bio"
          register={register("bio")}
        />
        {errors.bio?.message && <p>{errors.bio.message}</p>}

        <Input
          type="text"
          label="Contato"
          placeholder="Digite seu contato"
          register={register("contact")}
        />
        {errors.contact?.message && <p>{errors.contact.message}</p>}

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
        </div>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}
        <ButtonDefault type="submit" disabled={!isDirty || !isValid}>
          Entrar
        </ButtonDefault>
      </FormDefault>
    </main>
  );
};
