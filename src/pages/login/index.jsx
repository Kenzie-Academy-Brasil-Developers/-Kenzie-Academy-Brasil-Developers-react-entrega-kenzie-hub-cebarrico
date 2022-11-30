import { FormLogin } from "./style";
import { ButtonDefault } from "../../styles/button";
import { InputDefault } from "../../styles/input";
import "./style.css";
import logo from "../../assets/img/Logo.png";

export const LoginPage = () => {
  return (
    <main>
      <img src={logo} alt="kenzie hub" />
      <FormLogin>
        <h1>Login</h1>
        <div>
          <label name="">Email</label>
          <InputDefault type="email" name="" id="" />
        </div>
        <div>
          <label name="">Password</label>
          <InputDefault type="password" />
        </div>
        <ButtonDefault>Entrar</ButtonDefault>
        <span>Ainda não possui uma conta?</span>
        <ButtonDefault>Cadastrar</ButtonDefault>
      </FormLogin>
    </main>
  );
};
