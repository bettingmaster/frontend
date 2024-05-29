import React from "react";
import Link from "next/link";
import styles from "../styles/LeaguesCard.module.css";

const LeaguesCard = ({ leagues }) => {
  return (
    <div className={styles.container}>
      {leagues.map((league) => (
        <div key={league.leagueId} className={styles.item}>
          <Link href={`/league/${league.leagueId}`}>
            <a>{league.leagueName}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeaguesCard;
