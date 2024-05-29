"use client";

import { createContext, useState, useEffect } from "react";
import {
  fetchLeagues,
  fetchMatchesByLeague,
  fetchAdditionalOdds,
} from "../lib/api";

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [leagues, setLeagues] = useState([]);
  const [matches, setMatches] = useState([]);
  const [odds, setOdds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLeagues = async () => {
      setLoading(true);
      try {
        const data = await fetchLeagues();
        setLeagues(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getLeagues();
  }, []);

  const getMatchesByLeague = async (leagueId) => {
    setLoading(true);
    try {
      const data = await fetchMatchesByLeague(leagueId);
      setMatches(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getAdditionalOdds = async (matchId) => {
    setLoading(true);
    try {
      const data = await fetchAdditionalOdds(matchId);
      setOdds(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MatchContext.Provider
      value={{
        leagues,
        matches,
        odds,
        loading,
        error,
        getMatchesByLeague,
        getAdditionalOdds,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export default MatchContext;
