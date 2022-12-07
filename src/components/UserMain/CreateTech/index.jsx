import { useContext, useState } from "react";
import { ModalTech } from "../ModalAddTech";

import { CreateTechContainer } from "./createTechDiv";

export const CreateTech = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <CreateTechContainer>
      <h2>Tecnologias</h2>
      <button onClick={openModal}>+</button>
      {modalIsOpen ? (
        <ModalTech type="Cadastrar Tecnologia" close={closeModal} />
      ) : null}
    </CreateTechContainer>
  );
};
