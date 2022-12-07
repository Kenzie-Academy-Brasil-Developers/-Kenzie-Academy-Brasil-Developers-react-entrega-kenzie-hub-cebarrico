import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./RegisterSchema";

import { FormDefault } from "../../styles/form";
import { Nav } from "../../styles/nav";
import { Input } from "../../components/Inputs";
import { ButtonDefault } from "../../styles/button";

import logo from "../../assets/img/Logo.png";
import { LogoStyle } from "../../styles/logo";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerRequest } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  return (
    <main>
      <Nav>
        <LogoStyle src={logo} alt="kenzie hub" />
        <Link to={"/"}>Voltar</Link>
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
            <option value="Quinto modulo">Quinto Módulo</option>
            <option value="Sexto modulo">Sexto Módulo</option>
          </select>
        </div>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}
        <ButtonDefault type="submit" disabled={!isDirty || !isValid}>
          Criar conta
        </ButtonDefault>
      </FormDefault>
    </main>
  );
};
