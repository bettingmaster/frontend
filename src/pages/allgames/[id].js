// export const getStaticPaths = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo = await res.json();

//   const paths = repo.map((match) => {
//     return {
//       params: { id: match.id.toString() },
//     };
//   });

//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(`https://api.github.com/repos/vercel/next.js/#${id}`);
//   const data = await res.json();

//   return {
//     props: { match: data },
//   };
// };

// const Details = ({ match }) => {
//   return (
//     <div>
//       <h1>{match.name}</h1>
//       <p>{match.id}</p>
//     </div>
//   );
// };

// export default Details;

import React from "react";

const Games = () => {
  return <div>Games</div>;
};

export default Games;
