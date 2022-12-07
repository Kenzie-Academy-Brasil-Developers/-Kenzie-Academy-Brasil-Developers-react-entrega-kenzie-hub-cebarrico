import { useForm } from "react-hook-form";
import { useContext, useState } from "react";

import { api } from "../../../services/api";
import { ModalContainer } from "./modalContainer";
import { Input } from "../../Inputs";
import { FormDefault } from "../../../styles/form";
import { UpdateButton } from "./UdptadeButton";
import { CloseButton } from "../../../styles/button";

import { TechContext } from "../../../context/TechContext";
import { AuthContext } from "../../../context/AuthContext";

export const ModalTech = ({ type, close, id, value }) => {
  const { addTech } = useContext(TechContext);
  const { user } = useContext(AuthContext);
  const [tech, setTech] = useState({ user });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
  });

  function reload() {
    window.location.reload(false);
  }
  async function updateTech(data) {
    const token = localStorage.getItem("token");
    console.log(id);
    console.log(data);
    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ModalContainer>
      <div>
        <h3>{type}</h3>
        <CloseButton onClick={close}>x</CloseButton>
      </div>
      <FormDefault
        onSubmit={
          type === "Cadastrar Tecnologia"
            ? handleSubmit(addTech)
            : handleSubmit(updateTech)
        }
      >
        {type === "Cadastrar Tecnologia" ? (
          <Input
            type={"text"}
            label={"Tecnologia"}
            placeholder={"Digite a tecnologia"}
            register={register("title")}
          />
        ) : (
          <Input
            type={"text"}
            label={"Tecnologia"}
            placeholder={"Digite a tecnologia"}
            value={value}
          />
        )}

        <fieldset>
          <label name="">Selecionar status</label>
          <select {...register("status")}>
            <option value="">Selecionar status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </fieldset>
        {type === "Cadastrar Tecnologia" ? (
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="addTech"
            // onClick={reload}
          >
            Cadastrar Tecnologia
          </button>
        ) : (
          <UpdateButton id={id} />
        )}
      </FormDefault>
    </ModalContainer>
  );
};
