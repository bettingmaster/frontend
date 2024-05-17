import React from "react";
import { useRouter } from "next/router";

const MatchesContent = ({
  categories,
  selectedCountry,
  selectedLeague,
  setSelectedMatches,
}) => {
  const router = useRouter();

  const handleMatchesClick = (match) => {
    console.log("matchees", match);
    setSelectedMatches(match);
    router.push(`#${match}`);
  };
  return (
    <>
      {selectedLeague && (
        <div>
          <ul>
            {Object.values(
              categories.football.countries[selectedCountry].leagues[
                selectedLeague
              ].map((match) => (
                <li onClick={() => handleMatchesClick(match)} key={match.match}>
                  {match.match} - {match.date}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default MatchesContent;
