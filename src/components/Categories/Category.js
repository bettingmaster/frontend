"use client";
import React, { useState, useEffect } from "react";
import CountriesContent from "./CountriesContent";
import LeagueContent from "./LeagueContent";
import MatchesContent from "./MatchesContent";

const categories = {
  football: {
    countries: {
      italy: {
        leagues: {
          "Serie A": [
            { match: "Juventus vs Roma", date: "2024-05-12" },
            { match: "Inter Milan vs AC Milan", date: "2024-05-15" },
          ],
        },
      },

      england: {
        leagues: {
          "Premier League": [
            { match: "Man.Utd vs Man. City", date: "2024-05-12" },
            { match: "Arsenal vs Liverpool", date: "2024-05-15" },
          ],
        },
      },
      spain: {
        leagues: {
          "La Liga": [
            { match: "Barca vs Real Madrid", date: "2024-05-12" },
            { match: "Atl.M vs Girona", date: "2024-05-15" },
            { match: "Valencia vs Sevilla", date: "2024-05-18" },
          ],
        },
      },
      germany: {
        leagues: {
          Bundesliga: [
            { match: "Bayern Munich vs Borussia Dortmund", date: "2024-05-11" },
            { match: "RB Leipzig vs Bayer Leverkusen", date: "2024-05-14" },
          ],
        },
      },
    },
  },
};

const Category = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedMatches, setSelectedMatches] = useState("");

  console.log("country", selectedCountry, selectedLeague, selectedMatches);

  useEffect(() => {
    console.log("Selected Country:", selectedCountry);
    console.log("Selectes League:", selectedLeague);
    console.log("Selectes matches:", selectedMatches);
  }, [selectedCountry, selectedLeague, selectedMatches]);

  return (
    <>
      <CountriesContent
        categories={categories}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <LeagueContent
        categories={categories}
        selectedCountry={selectedCountry}
        setSelectedLeague={setSelectedLeague}
      />
      (
      <MatchesContent
        categories={categories}
        selectedCountry={selectedCountry}
        selectedLeague={selectedLeague}
        setSelectedMatches={setSelectedMatches}
      />
      )
    </>
  );
};

export default Category;
