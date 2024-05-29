// import React from "react";

// const ShowGames = ({ matches }) => {
//   return (
//     <div>
//       {Object.values(matches).map((tournament) => (
//         <div key={tournament.id}>
//           <h3>{tournament.name}</h3>
//           {tournament.matches.map((match) => (
//             <div key={match.id}>
//               <p>
//                 {match.team1} vs {match.team2}
//               </p>
//               <p>{match.start_date}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShowGames;

import styles from "./ShowGames.module.css";
import ShowGamesCard from "./BodyContent/ShowGamesCard";

export default function ShowGames({ matches }) {
  console.log("firsttt", matches);
  return (
    <>
      <section className={styles.main_content__body}>
        <ShowGamesCard games={matches} />
      </section>
    </>
  );
}

// const ShowGames = ({ matches }) => {
//   return (
//     <div>
//       {Object.values(matches).map((tournament) => (
//         <div key={tournament.name}>
//           <h4>{tournament.name}</h4>
//           {tournament.matches.map((match) => (
//             <div key={match.id}>
//               <p>
//                 {match.team1} vs {match.team2}
//               </p>
//               <p>Start Date: {match.start_date}</p>
//               <p>End Date: {match.end_date}</p>
//               <p>Status: {match.status}</p>
//               <p>Category: {match.game_category.name}</p>
//               {match.questions.map((question) => (
//                 <div key={question.id}>
//                   <h5>{question.name}</h5>
//                   {question.options.map((option) => (
//                     <p key={option.id}>
//                       Option: {option.option_name}, Ratio: {option.ratio}
//                     </p>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShowGames;
