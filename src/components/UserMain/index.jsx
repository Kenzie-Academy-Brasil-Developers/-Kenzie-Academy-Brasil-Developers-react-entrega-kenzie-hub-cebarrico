import { useEffect, useContext } from "react";

import { SectionMain } from "./sectionMain";
import { TechList } from "./TechList";

import { CreateTech } from "./CreateTech";

import { AuthContext } from "../../context/AuthContext";

export const UserMain = () => {
  const { techs } = useContext(AuthContext);

  const length = techs.length;

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
