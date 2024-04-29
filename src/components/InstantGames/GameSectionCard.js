import React from "react";
import styles from "./GamesSection.module.css";

export default function GameSectionCard({ game }) {
  return (
    <>
      <li className={styles.games__item}>
        <div
          className={styles.games__background}
          style={{ backgroundImage: `url(${game.url})` }}
        ></div>
        <div className={styles.games__gradiant}></div>
        <div
          className={styles.games__overlay}
          style={{ backgroundImage: `url(${game.overlayUrl})` }}
        ></div>
        <p className={styles.games__title}>{game.title}</p>
      </li>
    </>
  );
}
