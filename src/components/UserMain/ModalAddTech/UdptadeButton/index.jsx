import { useContext } from "react";

import { TechContext } from "../../../../context/TechContext";
import { AuthContext } from "../../../../context/AuthContext";

import { UpdateContainer } from "./updataContainer";

export const UpdateButton = ({ close, id }) => {
  const { deleteTech, updateTech } = useContext(TechContext);
  const { techs, setTech } = useContext(AuthContext);

  function removeItem() {
    const removeList = setTech(techs.filter((tech) => tech.id !== id));
  }

  function deleteItem() {
    removeItem();
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
