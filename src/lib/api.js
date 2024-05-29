import axios from "axios";

const API_URL_ALL = "https://e9de-109-236-40-12.ngrok-free.app";

export const fetchMatches = async (categoryId) => {
  try {
    const res = await axios.get(
      `${API_URL_ALL}/api/allSports?categoryId=${categoryId}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
          Authorization: "Bearer 26|D8fQUOynb4Kio12OWlMiNdSv5jSdsvgOSZFaUK79",
        },
      }
    );

    const { liveList, upcomingList, finishedList } = res.data;

    console.log("API Response:", { liveList, upcomingList, finishedList });
    return { liveList, upcomingList, finishedList };
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error;
  }
};

// //League API only sports
// const API_URL_LEAGUE = "https://3286-141-98-141-70.ngrok-free.app";

// export const fetchLeagues = async (categoryId) => {
//   try {
//     const response = await axios.get(
//       `${API_URL_LEAGUE}/api/allSports?categoryId=${categoryId}`,
//       {
//         headers: {
//           "ngrok-skip-browser-warning": "69420",
//           Authorization: "Bearer 26|D8fQUOynb4Kio12OWlMiNdSv5jSdsvgOSZFaUK79",
//         },
//       }
//     );
//     console.log("Apiii", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching leagues:", error);
//     throw error;
//   }
// };

// //matches by league
// export const fetchMatchesByLeague = async (leagueId) => {
//   try {
//     const response = await axios.get(`${API_URL}/matches?leagueId=${leagueId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching matches by league:", error);
//     throw error;
//   }
// };

// // matches odds
// const API_URL_ODDS = "https://d26a-141-98-141-14.ngrok-free.app/api/";

// export const fetchAdditionalOdds = async (matchId) => {
//   try {
//     const response = await axios.get(`${API_URL_ODDS}/odds?matchId=${matchId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching additional odds:", error);
//     throw error;
//   }
// };
