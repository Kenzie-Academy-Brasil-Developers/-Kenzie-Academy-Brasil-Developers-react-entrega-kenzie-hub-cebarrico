import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";

import { api } from "../services/api";

import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [techs, setTech] = useState(user.techs);
  const token = localStorage.getItem("token");
  console.log(techs);

  async function addTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia adcionada com sucesso!");
      setTech((oldTechs) => [...oldTechs, response.data]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  async function updateTech(data, id) {
    const token = localStorage.getItem("token");

    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const newArr = techs.map((tech) => {
        if (tech.id === id) {
          return {
            ...tech,
            status: response.data.status,
          };
        } else {
          return tech;
        }
      });

      setTech(newArr);
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function deleteTech(id) {
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia foi deletada!");
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <TechContext.Provider
      value={{ addTech, updateTech, deleteTech, techs, setTech }}
    >
      {children}
    </TechContext.Provider>
  );
};
