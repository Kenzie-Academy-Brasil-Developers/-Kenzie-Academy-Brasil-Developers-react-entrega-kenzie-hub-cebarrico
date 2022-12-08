import { useContext } from "react";

import { SectionMain } from "./sectionMain";
import { TechList } from "./TechList";

import { CreateTech } from "./CreateTech";

import { TechContext } from "../../context/TechContext";

export const UserMain = () => {
  const { techs } = useContext(TechContext);

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
