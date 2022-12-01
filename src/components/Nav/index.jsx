import logo from "../../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";
import { NavUser } from "../../styles/nav";

export const NavHeader = ({ path }) => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <NavUser>
      <img src={logo} alt="kenzie hub" />
      <button onClick={() => logout()}>Voltar</button>
    </NavUser>
  );
};
