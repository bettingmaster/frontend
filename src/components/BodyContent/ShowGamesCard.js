import ShowGamesCardItem from "./ShowGamesCardItem";
import ShowGamesHead from "./ShowGamesHead";
import styles from "./ShowGamesCardItem.module.css";

const ShowGamesCard = ({ games }) => {
  console.log("card games", games);

  return (
    <article className={styles.main_content__championship}>
      {Object.entries(games).map((tournament) => (
        <div key={tournament.id}>
          <ShowGamesHead tournament={tournament} />
          {tournament.matches.map((match) => (
            <div key={match.id}>
              {match.questions.map((question) => (
                <div key={question.id}>
                  {question.options.map((option) => (
                    <ShowGamesCardItem
                      tournament={tournament}
                      key={option.id}
                      match={match}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </article>
  );
};

export default ShowGamesCard;
