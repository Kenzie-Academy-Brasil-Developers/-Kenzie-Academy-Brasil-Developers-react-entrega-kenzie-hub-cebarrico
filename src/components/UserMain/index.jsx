import { useEffect, useContext } from "react";

import { SectionMain } from "./sectionMain";
import { TechList } from "./TechList";

import { CreateTech } from "./CreateTech";
import { TechContext } from "../../context/TechContext";
import { AuthContext } from "../../context/AuthContext";

export const UserMain = () => {
  const { user } = useContext(AuthContext);

  const length = user.techs.length;

  return (
    <SectionMain>
      <CreateTech />
      {length > 0 ? (
        <TechList />
      ) : (
        <p>Você não adcionou nenhuma tecnologia ainda !</p>
      )}
    </SectionMain>
  );
};
