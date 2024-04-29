"use client";
import React, { useState } from "react";
import styles from "./ShowGames.module.css";
import ShowGamesCard from "./BodyContent/ShowGamesCard";

export default function ShowGames() {
  const [gamesInfo, setgamesInfo] = useState([
    {
      id: 1,
      leagues: "Netherlands - Premier League",
      homeSquad: "Sparta Rotterdam",
      awaySquad: "FC Utrecht",
      firstSquadBet: "1",
      drawBet: "X",
      secondSquadBet: "2",
      gameMin: "49",
      gameSec: "34",
      numGameData: "73",
      homeSquadScore: "0",
      awaySquadScore: "0",
      homeSquadCoef: "7.00",
      awaySquadCoef: "1.95",
      drawCoef: "2.40",
    },
    {
      id: 2,
      leagues: "Argentina Nacional B",
      homeSquad: "Temperley",
      awaySquad: "Nueva Chicago",
      firstSquadBet: "1",
      drawBet: "X",
      secondSquadBet: "2",
      gameMin: "31",
      gameSec: "22",
      numGameData: "57",
      homeSquadScore: "1",
      awaySquadScore: "0",
      homeSquadCoef: "1.44",
      awaySquadCoef: "3.75",
      drawCoef: "9.00",
    },
    {
      id: 3,
      leagues: "Mexico - Liga TDP",
      homeSquad: "CEFOR Chiapas",
      awaySquad: "Antequera FC",
      firstSquadBet: "1",
      drawBet: "X",
      secondSquadBet: "2",
      gameMin: "00",
      gameSec: "00",
      numGameData: "87",
      homeSquadScore: "0",
      awaySquadScore: "0",
      homeSquadCoef: "1.60",
      awaySquadCoef: "3.75",
      drawCoef: "4.50",
    },
    {
      id: 4,
      leagues: "Mexico - Liga TDP",
      homeSquad: "Chiapas",
      awaySquad: "Quera FC",
      firstSquadBet: "1",
      drawBet: "X",
      secondSquadBet: "2",
      gameMin: "05",
      gameSec: "40",
      numGameData: "77",
      homeSquadScore: "0",
      awaySquadScore: "0",
      homeSquadCoef: "1.90",
      awaySquadCoef: "3.45",
      drawCoef: "3.50",
    },
    {
      id: 5,
      leagues: "Italy - Seria A",
      homeSquad: "Milan",
      awaySquad: "Fiorentina",
      firstSquadBet: "1",
      drawBet: "X",
      secondSquadBet: "2",
      gameMin: "15",
      gameSec: "00",
      numGameData: "90",
      homeSquadScore: "2",
      awaySquadScore: "1",
      homeSquadCoef: "2.00",
      awaySquadCoef: "3.00",
      drawCoef: "3.20",
    },
    {
      id: 6,
      leagues: "Italy - Seria A",
      homeSquad: "Juve",
      awaySquad: "Inter",
      firstSquadBet: "1",
      drawBet: "X",
      secondSquadBet: "2",
      gameMin: "80",
      gameSec: "40",
      numGameData: "77",
      homeSquadScore: "1",
      awaySquadScore: "3",
      homeSquadCoef: "4.00",
      awaySquadCoef: "3.20",
      drawCoef: "1.60",
    },
    {
      id: 7,
      leagues: "England - Premier League",
      homeSquad: "Liverpool",
      awaySquad: "Man. City",
      firstSquadBet: "1",
      drawBet: "X",
      secondSquadBet: "2",
      gameMin: "85",
      gameSec: "25",
      numGameData: "77",
      homeSquadScore: "2",
      awaySquadScore: "2",
      homeSquadCoef: "3.00",
      awaySquadCoef: "1.50",
      drawCoef: "3.00",
    },
  ]);

  const handleSearch = (searchTerm) => {
    const filteredData = gamesInfo.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update state with filtered data
    setgamesInfo(filteredData);
  };

  const groupedGames = gamesInfo.reduce((acc, game) => {
    const { leagues } = game;
    if (!acc[leagues]) {
      acc[leagues] = [];
    }
    acc[leagues].push(game);
    return acc;
  }, {});

  return (
    <>
      <section className={styles.main_content__body}>
        <ShowGamesCard games={groupedGames} handleSearch={handleSearch} />
      </section>
    </>
  );
}
