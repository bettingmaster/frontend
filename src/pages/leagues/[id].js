"use client";

import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import ShowGames from "@/components/ShowGames";

const LeagueMatches = () => {
  const router = useRouter();
  const { id } = router.query;
  const { matches, loading, error, getMatchesByLeague } =
    useContext(MatchContext);

  useEffect(() => {
    if (id) {
      getMatchesByLeague(id);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading matches: {error.message}</p>;

  return (
    <div>
      <h1>Matches for League {id}</h1>
      <ShowGames matches={matches} />
    </div>
  );
};

export default LeagueMatches;
