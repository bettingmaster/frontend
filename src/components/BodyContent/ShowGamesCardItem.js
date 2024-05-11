"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./ShowGamesCardItem.module.css";
import { useSelectedGame } from "../../context/SelectedGameContext";

const ShowGamesCardItem = ({ game }) => {
  const { selectedGames, setSelectedGames } = useSelectedGame();

  const handleSelectGame = (team1_name, team2_name, odd, id, name) => {
    const existingGameIndex = selectedGames.findIndex((game) => game.id === id);

    if (existingGameIndex !== -1) {
      const existingGame = selectedGames[existingGameIndex];

      if (existingGame.odd !== odd) {
        const updatedSelectedGames = [...selectedGames];
        updatedSelectedGames[existingGameIndex] = {
          ...existingGame,
          odd: odd,
        };
        setSelectedGames(updatedSelectedGames);
      }
    } else {
      setSelectedGames((prevSelectedGames) => [
        ...prevSelectedGames,
        { team1_name, team2_name, odd, id, name },
      ]);
    }
  };

  return (
    <>
      <div
        key={game.id}
        className={`${styles.main_content__championship__body} ${styles.grid_games} container`}
      >
        <div
          className={`${styles.main_content__championship__body__text} flex-between-center`}
        >
          <div className={styles.main_content__championship__body__data_item}>
            <div className={styles.main_content__championship__body__time}>
              {game.time}
            </div>
            <div className={styles.main_content__championship__body__data}>
              {game.totalQuestion}
              <i>
                <FaAngleRight />
              </i>
            </div>
          </div>
          <div className={styles.main_content__championship__body__name}>
            <div className={styles.main_content__championship__body__name}>
              <p>{game.team1_name}</p>
              <p>{game.team2_name}</p>
            </div>
          </div>
          <div className={styles.main_content__championship__body__insights}>
            <span>{game.team1_score}</span>
            <br />
            <span>{game.team2_score}</span>
          </div>
        </div>

        {game.odds.map((odd, idx) => (
          <div
            className={styles.main_content__championship__body__num}
            key={idx} // Use a unique identifier (e.g., odd.name)
          >
            <button
              onClick={() =>
                handleSelectGame(
                  game.team1_name,
                  game.team2_name,
                  odd.odd,
                  game.id,
                  odd.name
                )
              }
            >
              {odd.odd.toFixed(2)}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowGamesCardItem;
