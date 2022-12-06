import { createContext } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  function addTech() {
    console.log("oi");
  }

  return (
    <TechContext.Provider value={{ addTech }}>{children}</TechContext.Provider>
  );
};
