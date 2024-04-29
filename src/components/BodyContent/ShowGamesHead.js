import React from "react";
import styles from "./ShowGamesCardItem.module.css";

export default function ShowGamesHead({ league }) {
  return (
    <div
      className={`${styles.main_content__championship__head} ${styles.grid_games} container`}
    >
      <p className={styles.main_content__championship__head__text}>{league}</p>
      <div className={styles.main_content__championship__head__num1}>1</div>
      <div className={styles.main_content__championship__head__num2}>X</div>
      <div className={styles.main_content__championship__head__num3}>2</div>
      <div className={styles.main_content__championship__head__symbol}></div>
    </div>
  );
}
