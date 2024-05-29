"use client";
import { useContext } from "react";
import LeaguesCard from "@/components/Leagues/LeaguesCard";

const Leagues = () => {
  const { leagues, loading, error } = useContext(MatchContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading leagues: {error.message}</p>;

  return (
    <div>
      <h1>Leagues</h1>
      <LeaguesCard leagues={leagues} />
    </div>
  );
};

export default Leagues;
