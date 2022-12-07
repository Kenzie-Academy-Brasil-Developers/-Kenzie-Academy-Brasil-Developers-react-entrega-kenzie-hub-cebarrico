import { useContext } from "react";

import { TechContext } from "../../../../context/TechContext";

import { UpdateContainer } from "./updataContainer";

export const UpdateButton = ({ id }) => {
  const { deleteTech, updateTech } = useContext(TechContext);

  function updateItem() {
    updateTech(id);
  }

  function deleteItem() {
    deleteTech(id);
    // window.location.reload();
    console.log(id);
  }
  return (
    <UpdateContainer>
      <button type="submit">Salvar alterações</button>
      <button className="deleteBtm" onClick={deleteItem}>
        Excluir
      </button>
    </UpdateContainer>
  );
};
