import { useEffect } from "react";

import { SectionMain } from "./sectionMain";
import { CreateTech } from "./CreateTech";
import { TechContext } from "../../context/TechContext";

export const UserMain = () => {
  return (
    <SectionMain>
      <CreateTech />
      <h2>Que pena! Estamos em desenvolvimento :(</h2>
      <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
    </SectionMain>
  );
};
