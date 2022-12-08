import { useContext } from "react";

import { TechContext } from "../../../../context/TechContext";

import { UpdateContainer } from "./updataContainer";

export const UpdateButton = ({ close, id }) => {
  const { deleteTech, techs, setTech } = useContext(TechContext);

  function deleteItem() {
    const removeList = setTech(techs.filter((tech) => tech.id !== id));

    deleteTech(id);
    close();
  }
  return (
    <UpdateContainer>
      <button type="submit">Salvar alterações</button>
      <button type="button" className="deleteBtm" onClick={deleteItem}>
        Excluir
      </button>
    </UpdateContainer>
  );
};
