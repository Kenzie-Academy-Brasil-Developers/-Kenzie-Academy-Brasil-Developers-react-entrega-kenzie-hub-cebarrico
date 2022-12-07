import { createContext, useContext } from "react";

import { api } from "../services/api";

import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techs, setTech } = useContext(AuthContext);

  const token = localStorage.getItem("token");

  async function addTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setTech((oldTechs) => [...oldTechs, response.data]);
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTech(id) {
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
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
