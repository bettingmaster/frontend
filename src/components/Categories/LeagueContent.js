import React from "react";
import { useRouter } from "next/router";
import styles from "./CountriesContent.module.css";

const LeagueContent = ({ categories, selectedCountry, setSelectedLeague }) => {
  const router = useRouter();
  const handleLeagueClick = (league) => {
    console.log("leagueee", league);
    setSelectedLeague(league);
    router.push(`#${league}`);
  };

  return (
    <>
      {selectedCountry && (
        <div className={styles.main_content}>
          <div className={styles.title}>
            Leagues for{" "}
            {selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}
          </div>
          <ul>
            {Object.keys(
              categories.football.countries[selectedCountry].leagues
            ).map((league) => (
              <li
                className={styles.countries_lists}
                key={league}
                onClick={() => handleLeagueClick(league)}
              >
                {league}
                <span>➔</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default LeagueContent;
