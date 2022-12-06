import { CreateTechContainer } from "./createTechDiv";
import { TechContext } from "../../../context/TechContext";
import { useContext } from "react";

export const CreateTech = () => {
  const { addTech } = useContext(TechContext);

  return (
    <CreateTechContainer>
      <h2>Tecnologias</h2>
      <button onClick={addTech}>+</button>
    </CreateTechContainer>
  );
};
