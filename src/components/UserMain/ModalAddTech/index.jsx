import { useForm } from "react-hook-form";
import { useContext } from "react";

import { ModalContainer, ModalBackground } from "./modalContainer";
import { Input } from "../../Inputs";
import { FormDefault } from "../../../styles/form";
import { UpdateButton } from "./UdptadeButton";
import { CloseButton } from "../../../styles/button";

import { TechContext } from "../../../context/TechContext";

export const ModalTech = ({ type, close, id, value }) => {
  const { addTech, updateTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onBlur",
  });

  return (
    <ModalBackground>
      <ModalContainer>
        <div>
          <h3>{type}</h3>
          <CloseButton onClick={close}>x</CloseButton>
        </div>
        <FormDefault
          onSubmit={
            type === "Cadastrar Tecnologia"
              ? handleSubmit((event) => {
                  addTech(event);
                  close();
                })
              : handleSubmit((event) => {
                  updateTech(event, id);
                  close();
                })
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
              placeholder={value}
              disabled="disabled"
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
            >
              Cadastrar Tecnologia
            </button>
          ) : (
            <UpdateButton close={close} id={id} />
          )}
        </FormDefault>
      </ModalContainer>
    </ModalBackground>
  );
};
