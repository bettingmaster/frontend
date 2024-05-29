"use client";

import { useEffect, useState } from "react";
import { fetchMatches } from "@/lib/api";
import ShowGames from "@/components/ShowGames";

const AllGames = () => {
  const [matches, setMatches] = useState({
    live: {},
    upcoming: {},
    finished: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categorizeMatchesByTournament = (matches) => {
    const categorizedMatches = {};

    matches.forEach((match) => {
      const tournamentId = match.game_tournament.id;
      const tournamentName = match.game_tournament.name;

      if (!categorizedMatches[tournamentId]) {
        categorizedMatches[tournamentId] = {
          name: tournamentName,
          matches: [],
        };
      }

      categorizedMatches[tournamentId].matches.push(match);
    });

    return categorizedMatches;
  };

  useEffect(() => {
    const getMatches = async () => {
      try {
        const data = await fetchMatches(1);
        setMatches({
          live: categorizeMatchesByTournament(
            Object.values(data?.liveList || {})
          ),
          upcoming: categorizeMatchesByTournament(
            Object.values(data?.upcomingList || {})
          ),
          finished: categorizeMatchesByTournament(
            Object.values(data?.finishedList || {})
          ),
        });
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
      <ShowGames matches={matches.live} />
      <ShowGames matches={matches.upcoming} />
      <ShowGames matches={matches.finished} />
    </div>
  );
};

export default AllGames;

// "use client";

// import { useEffect, useState } from "react";
// import { fetchMatches } from "@/lib/api";
// import ShowGames from "@/components/ShowGames";

// const AllGames = () => {
//   const [matches, setMatches] = useState({
//     liveList: [],
//     upcomingList: [],
//     finishedList: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getMatches = async () => {
//       try {
//         const data = await fetchMatches(1);
//         setMatches({
//           liveList: Object.values(data.liveList || {}),
//           upcomingList: Object.values(data.upcomingList || {}),
//           finishedList: Object.values(data.finishedList || {}),
//         });
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMatches();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading matches: {error.message}</p>;

//   return (
//     <div>
//       {matches.liveList.length > 0 ? (
//         matches.liveList.map((match) => (
//           <ShowGames key={match.id} match={match} />
//         ))
//       ) : (
//         <p>No live matches available</p>
//       )}

//       {matches.upcomingList.length > 0 ? (
//         matches.upcomingList.map((match) => (
//           <ShowGames key={match.id} match={match} />
//         ))
//       ) : (
//         <p>No upcoming matches available</p>
//       )}

//       {matches.finishedList.length > 0 ? (
//         matches.finishedList.map((match) => (
//           <ShowGames key={match.id} match={match} />
//         ))
//       ) : (
//         <p>No finished matches available</p>
//       )}
//     </div>
//   );
// };

// export default AllGames;

// "use client";

// import { useEffect, useState } from "react";
// import { fetchMatches } from "@/lib/api";
// // import ShowGames from "@/components/ShowGames";

// const AllGames = () => {
//   const [liveMatches, setLiveMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getMatches = async () => {
//       try {
//         const data = await fetchMatches(1);
//         // Extracting the matches from the nested structure
//         const liveMatchesArray = Object.values(data.liveList || {}).map(
//           (match) => match
//         );
//         console.log("livee", liveMatchesArray);
//         setLiveMatches(liveMatchesArray);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMatches();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading matches: {error.message}</p>;

//   return (
//     <div>
//       <h3>Live Matches</h3>
//       {liveMatches.length > 0 ? (
//         liveMatches.map((livematch) =>
//           console.log("first", livematch.game_tournament.name)
//         )
//       ) : (
//         <p>No live matches available</p>
//       )}
//     </div>
//   );
// };

// export default AllGames;
