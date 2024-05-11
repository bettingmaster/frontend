"use client";
import React from "react";
import styles from "./ShowGames.module.css";
import ShowGamesCard from "./BodyContent/ShowGamesCard";
import { useData } from "@/context/DataContext";

export default function ShowGames() {
  const { gamesInfo } = useData();

  const groupedGames = gamesInfo.reduce((acc, game) => {
    const { game_tournament } = game;
    if (!acc[game_tournament]) {
      acc[game_tournament] = [];
    }
    acc[game_tournament].push(game);
    return acc;
  }, {});

  return (
    <>
      <section className={styles.main_content__body}>
        <ShowGamesCard games={groupedGames} />
      </section>
    </>
  );
}
