import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [techs, setTech] = useState(user.techs);

  const token = localStorage.getItem("token");

  async function addTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  async function updateTech(id, data) {
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

  async function deleteTech(id) {
    try {
      const response = await api.delete(`/users/techs/${id}`, {
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
    <TechContext.Provider
      value={{ addTech, updateTech, deleteTech, techs, setTech }}
    >
      {children}
    </TechContext.Provider>
  );
};
