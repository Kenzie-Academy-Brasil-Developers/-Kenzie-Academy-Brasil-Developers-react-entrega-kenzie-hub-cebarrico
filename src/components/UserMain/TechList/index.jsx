import { useState, useContext } from "react";

import { MainTechList } from "./techList";
import { ModalTech } from "../ModalAddTech";

import { AuthContext } from "../../../context/AuthContext";

export const TechList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTech, setCurrentTech] = useState({});

  const { techs } = useContext(AuthContext);

  function openModal(tech) {
    setCurrentTech(tech);
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <MainTechList>
      {techs?.map((tech) => (
        <li
          key={tech.title}
          onClick={() => {
            setCurrentTech(tech);
            setModalIsOpen(true);
          }}
        >
          <h3>{tech.title}</h3>
          <span>{tech.status}</span>
        </li>
      ))}

      {modalIsOpen ? (
        <ModalTech
          type="Tecnologia Detalhes"
          close={closeModal}
          id={currentTech.id}
          value={currentTech.title}
        />
      ) : null}
    </MainTechList>
  );
};
