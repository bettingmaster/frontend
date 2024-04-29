import React from "react";
import styles from "./GamesSection.module.css";
import GameSectionCard from "./GameSectionCard";

const gamesSecInfo = [
  {
    id: 1,
    title: "Blackjack",
    url: "/assets/games-section/blackjack_background.jpg",
    overlayUrl: "/assets/games-section/blackjack_overlay.png",
  },
  {
    id: 2,
    title: "Super Mega Ultra Wheel",
    url: "/assets/games-section/superMegaUltraWheel_background.jpg",
    overlayUrl: "/assets/games-section/superMegaUltraWheel_overlay.png",
  },
  {
    id: 3,
    title: "Book of Horus",
    url: "/assets/games-section/bookOfHorus_background.jpg",
    overlayUrl: "/assets/games-section/bookOfHorus_overlay.png",
  },
  {
    id: 4,
    title: "European Roulette",
    url: "/assets/games-section/europeanRoulette_background.jpg",
    overlayUrl: "/assets/games-section/europeanRoulette_overlay.png",
  },
  {
    id: 5,
    title: "8 Immortals",
    url: "/assets/games-section/8immortals_background.jpg",
    overlayUrl: "/assets/games-section/8immortals_overlay.png",
  },
  {
    id: 6,
    title: "Atomic 7s",
    url: "/assets/games-section/atomic7s_background.jpg",
    overlayUrl: "/assets/games-section/atomic7s_overlay.png",
  },
];

export default function GamesSection() {
  return (
    <div className={`container ${styles.games__wrapper}`}>
      <h2>Instant Games</h2>
      <ul className={styles.games__posters}>
        {gamesSecInfo.map((game) => (
          <GameSectionCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}
