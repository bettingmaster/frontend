import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./ShowGamesCardItem.module.css";

const ShowGamesCardItem = ({ game }) => {
  return (
    <>
      <div
        className={`${styles.main_content__championship__body} ${styles.grid_games} container`}
      >
        <div
          className={`${styles.main_content__championship__body__text} flex-between-center`}
        >
          <div className={styles.main_content__championship__body__data_item}>
            <div className={styles.main_content__championship__body__time}>
              {game.gameMin}:{game.gameSec}
            </div>
            <div className={styles.main_content__championship__body__data}>
              {game.numGameData}
              <i>
                <FaAngleRight />
              </i>
            </div>
          </div>
          <div className={styles.main_content__championship__body__name}>
            <p>{game.homeSquad}</p>
            <p>{game.awaySquad}</p>
          </div>
          <div className={styles.main_content__championship__body__insights}>
            <span>{game.homeSquadScore}</span>
            <br />
            <span>{game.awaySquadScore}</span>
          </div>
        </div>
        <div className={styles.main_content__championship__body__num}>
          {game.homeSquadCoef}
        </div>
        <div className={styles.main_content__championship__body__num}>
          {game.drawCoef}
        </div>
        <div className={styles.main_content__championship__body__num}>
          {game.awaySquadCoef}
        </div>
      </div>
    </>
  );
};

export default ShowGamesCardItem;
