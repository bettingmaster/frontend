"use client";
import React, { useContext } from "react";
// import MatchContext from "../context/MatchContext";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./ShowGamesCardItem.module.css";
import { useSelectedGame } from "../../context/SelectedGameContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";

const ShowGamesCardItem = ({ game }) => {
  const { selectedGames, setSelectedGames } = useSelectedGame();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const { odds, loading, error, getAdditionalOdds } = useContext(MatchContext);

  const handleSelectGame = (team1_name, team2_name, odd, id, name) => {
    const existingGameIndex = selectedGames.findIndex((game) => game.id === id);

    if (existingGameIndex !== -1) {
      const existingGame = selectedGames[existingGameIndex];

      if (existingGame.odd !== odd) {
        const updatedSelectedGames = [...selectedGames];
        updatedSelectedGames[existingGameIndex] = {
          ...existingGame,
          odd: odd,
          name: name,
        };
        setSelectedGames(updatedSelectedGames);
      }
    } else {
      setSelectedGames((prevSelectedGames) => [
        ...prevSelectedGames,
        { team1_name, team2_name, odd, id, name },
      ]);
    }
  };

  return (
    <>
      <div
        key={game.id}
        className={`${styles.main_content__championship__body} ${styles.grid_games} container`}
      >
        <div
          className={`${styles.main_content__championship__body__text} flex-between-center`}
        >
          <div className={styles.main_content__championship__body__data_item}>
            <div className={styles.main_content__championship__body__time}>
              {game.time}
            </div>
            <div className={styles.main_content__championship__body__data}>
              {game.totalQuestion}
              <i>
                <FaAngleRight />
              </i>
            </div>
          </div>
          <div className={styles.main_content__championship__body__name}>
            <div className={styles.main_content__championship__body__name}>
              <p>{game.team1_name}</p>
              <p>{game.team2_name}</p>
            </div>
          </div>
          <div className={styles.main_content__championship__body__insights}>
            <span>{game.team1_score}</span>
            <br />
            <span>{game.team2_score}</span>
          </div>
        </div>

        {game.odds.map((odd, idx) => (
          <div
            onClick={() =>
              handleSelectGame(
                game.team1_name,
                game.team2_name,
                odd.odd,
                game.id,
                odd.name
              )
            }
            className={styles.main_content__championship__body__num}
            key={idx}
          >
            <button>{odd.odd.toFixed(2)}</button>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Additional Odds</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading ? (
              <Spinner />
            ) : error ? (
              <p>Error loading odds: {error.message}</p>
            ) : (
              <div>
                <h2>
                  {selectedMatch?.team1} vs {selectedMatch?.team2}
                </h2>
                <div>
                  {odds.map((group, index) => (
                    <div key={index} className={styles.oddsGroup}>
                      <h3>{group.title}</h3>
                      <ul>
                        {group.odds.map((odd, idx) => (
                          <li key={idx}>{odd}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowGamesCardItem;
