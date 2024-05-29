"use client";

import { useEffect, useState } from "react";
import { fetchMatches } from "@/lib/api";
import ShowGames from "@/components/ShowGames";

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMatches = async () => {
      console.log("ffdg");
      try {
        const data = await fetchMatches(1);
        setMatches(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMatches();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading matches: {error.message}</p>;

  return (
    <div>
      <h1>Live Matches</h1>
      <ShowGames matches={matches} />
    </div>
  );
};

export default LiveMatches;
