import { ButtonDefault } from "../../styles/button";
import { InputDefault } from "../../styles/input";
import logo from "../../assets/img/Logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./RegisterSchema";
import { FormDefault } from "../../styles/form";
import { Nav } from "./Nav/nav";

import "./style.css";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });
  function registerRequest(data) {
    console.log(data);
    navigate("/");
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
          <label name="">Confirme sua senha</label>
          <InputDefault type="password" placeholder="Coloque sua senha" />
          {errors.password?.message && <p>{errors.password.message}</p>}
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
            <option value="primeiro modulo">Primeiro Módulo</option>
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
