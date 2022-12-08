import { useState, useContext } from "react";

import { MainTechList } from "./techList";
import { ModalTech } from "../ModalAddTech";

import { TechContext } from "../../../context/TechContext";

import Trash from "../../../assets/img/trash.svg";

export const TechList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTech, setCurrentTech] = useState({});

  const { techs } = useContext(TechContext);

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
          <div className="statusContainer">
            <span>{tech.status}</span>
            <img src={Trash} alt="" />
          </div>
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
