// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const DataContext = createContext();

// // export const UserContext = createContext({
// //   user: null,
// //   updateUser: () => {},
// // });

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://api.example.com/data");
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <DataContext.Provider value={{ data, updateData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

import { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [gamesInfo, setGamesInfo] = useState([
    {
      id: 1,
      game_tournament: "Italy-Seria A",
      time: "90",
      team1_score: 3,
      team2_score: 3,
      totalQuestion: 4,
      team1_name: "Milan",
      team2_name: "Genoa",
      odds: [
        { name: "1", odd: 1.1 },
        { name: "X", odd: 5.0 },
        { name: "2", odd: 8.0 },
      ],
    },
    {
      id: 2,
      game_tournament: "Italy-Seria A",
      time: "50",
      team1_score: 2,
      team2_score: 0,
      totalQuestion: 33,
      team1_name: "Roma",
      team2_name: "Genoa",
      odds: [
        { name: "1", odd: 1.4 },
        { name: "X", odd: 4.0 },
        { name: "2", odd: 7.0 },
      ],
    },
    {
      id: 3,
      game_tournament: "Italy-Seria A",
      time: "60",
      team1_score: 1,
      team2_score: 0,
      totalQuestion: 45,
      team1_name: "Torino",
      team2_name: "Genoa",
      odds: [
        { name: "!", odd: 1.8 },
        { name: "X", odd: 3.0 },
        { name: "2", odd: 4.0 },
      ],
    },
    {
      id: 4,
      game_tournament: "Premier League",
      time: "80",
      team1_score: 2,
      team2_score: 3,
      totalQuestion: 43,
      team1_name: "Arsenal",
      team2_name: "Manchester City",
      odds: [
        { name: "1", odd: 5.0 },
        { name: "X", odd: 3.0 },
        { name: "2", odd: 2.0 },
      ],
    },
    {
      id: 5,
      game_tournament: "Spanish Premiera",
      time: "60",
      team1_score: 3,
      team2_score: 3,
      totalQuestion: 79,
      team1_name: "Real Madrid",
      team2_name: "Barcelona",
      odds: [
        { name: "1", odd: 1.8 },
        { name: "X", odd: 3.0 },
        { name: "2", odd: 4.0 },
      ],
    },
  ]);

  const searchedGames =
    searchTerm.length > 0
      ? gamesInfo
          .filter((game) => `${game.leagues} ${game.body}`)
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      : gamesInfo;

  return (
    <DataContext.Provider
      value={{
        gamesInfo,
        setGamesInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside of the PostProvider");
  return context;
}

export { DataProvider, useData };
