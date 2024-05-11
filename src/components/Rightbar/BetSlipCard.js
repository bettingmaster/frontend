"use client";
import React, { useState } from "react";
import styles from "./BetSlipCard.module.css";
import { Button } from "@chakra-ui/react";
import { useSelectedGame } from "../../context/SelectedGameContext";

export default function BetSlipCard() {
  const [balance, setBalance] = useState(500); // Initial balance
  const [betAmount, setBetAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isBetting, setIsBetting] = useState(false);
  const { selectedGames, setSelectedGames } = useSelectedGame();

  const handleBetAmountChange = (e) => {
    setBetAmount(parseFloat(e.target.value));
    calculateTotal();
  };

  const handlePlaceBet = () => {
    const betAmountFloat = parseFloat(betAmount);
    if (isNaN(betAmountFloat) || betAmountFloat <= 0) {
      setErrorMessage("Please enter a valid bet amount.");
      return;
    }

    if (betAmountFloat > balance) {
      setErrorMessage("Insufficient balance.");
      return;
    }

    setIsBetting(true);
    setTimeout(() => {
      setErrorMessage("");
      setIsBetting(false);
      setBalance(balance - betAmountFloat);
      alert(`Bet placed successfully! Amount: ${betAmountFloat}`);
      setBetAmount("");
      setSelectedGames([]);
    }, 2000);
  };

  const removeMatch = (id) => {
    setSelectedGames(selectedGames.filter((match) => match.id !== id));
  };

  const calculateTotal = () => {
    if (!betAmount) return "0.00";
    const betAmountFloat = parseFloat(betAmount);
    const total =
      selectedGames.reduce((acc, match) => acc * match.odd, 1) * betAmountFloat;
    return total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const countSelectedGames = () => {
    return selectedGames.length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.header}>
          <div className={styles.betSlipCount}>{countSelectedGames()}</div>
          <div className={styles.title_one}>Bet Slip</div>
        </div>
        <div className={styles.text_balance}>Balance</div>
        <div className={styles.balance}>{balance}</div>
      </div>
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
      <div className={styles.btnGroup}>
        <span className={styles.titleTwo}>Selected Games</span>
      </div>
      {selectedGames.length > 0 ? (
        <div className={styles.match_list}>
          {selectedGames.map((match) => (
            <div key={match.id} className={styles.match}>
              <div className={styles.matchName}>
                {match.team1_name} - {match.team2_name}
                <span className={styles.finalResult}>
                  Final result: ({match.name})
                </span>
              </div>
              <div className={styles.odds}>
                <span className={styles.oddsValue}>{match.odd.toFixed(2)}</span>
                <button
                  onClick={() => removeMatch(match.id)}
                  className={styles.removeBtn}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.fieldText}>No games selected yet.</p>
      )}
      <div className={styles.infoContainer}>
        <label htmlFor="betAmount">Bet Amount: </label>
        <input
          id="betAmount"
          type="number"
          value={betAmount}
          onChange={handleBetAmountChange}
          placeholder="100"
        />
        <div className={styles.infoText}>Total: {calculateTotal()}</div>
      </div>

      <Button
        isLoading={isBetting}
        loadingText="Placing Bet..."
        onClick={handlePlaceBet}
        colorScheme="green"
        className={styles.placeBetBtn}
      >
        Place Bet
      </Button>
    </div>
  );
}
