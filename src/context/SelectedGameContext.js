import { createContext, useState } from "react";

export const SelectedGamesContext = createContext({
  selectedGames: [],
  addSelectedGame: (game) => {},
});

export const SelectedGamesProvider = ({ children }) => {
  const [selectedGames, setSelectedGames] = useState([]);

  const addSelectedGame = (game) => {
    setSelectedGames([...selectedGames, game]);
  };

  return (
    <SelectedGamesContext.Provider value={{ selectedGames, addSelectedGame }}>
      {children}
    </SelectedGamesContext.Provider>
  );
};

export default SelectedGamesContext;
