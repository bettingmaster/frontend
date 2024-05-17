"use client";
import { createContext, useState, useContext } from "react";

const SelectedGamesContext = createContext();

const SelectedGamesProvider = ({ children }) => {
  const [selectedGames, setSelectedGames] = useState([]);

  return (
    <SelectedGamesContext.Provider value={{ selectedGames, setSelectedGames }}>
      {children}
    </SelectedGamesContext.Provider>
  );
};

function useSelectedGame() {
  const context = useContext(SelectedGamesContext);
  if (context === undefined)
    throw new Error(
      "SelectedGamesContext was used outside of the PostProvider"
    );
  return context;
}

export { SelectedGamesProvider, useSelectedGame };
