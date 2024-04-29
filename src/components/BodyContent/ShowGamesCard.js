import React from "react";
import ShowGamesCardItem from "./ShowGamesCardItem";
import ShowGamesHead from "./ShowGamesHead";
import styles from "./ShowGamesCardItem.module.css";

const ShowGamesCard = ({ games }) => {
  return (
    <>
      <article className={styles.main_content__championship}>
        {Object.entries(games).map(([league, gamesInLeague]) => (
          <div key={league}>
            <ShowGamesHead league={league} />
            {gamesInLeague.map((game) => (
              <ShowGamesCardItem league={league} key={game.id} game={game} />
            ))}
          </div>
        ))}
      </article>
    </>
  );
};

export default ShowGamesCard;
