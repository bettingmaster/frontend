"use client";

// import axios from "axios";
import React, { useState, useContext } from "react";
import styles from "./BetSlipCard.module.css";
import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useSelectedGame } from "../../context/SelectedGameContext";
import AuthContext from "@/context/AuthContext";

export default function BetSlipCard() {
  const [balance, setBalance] = useState(500); // Initial balance
  const [betAmount, setBetAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isBetting, setIsBetting] = useState(false);
  const { selectedGames, setSelectedGames } = useSelectedGame();
  const { user } = useContext(AuthContext);

  // user's balance.

  // useEffect(() => {
  //   const fetchBalance = async () => {
  //     if (user) {
  //       try {
  //         const response = await axios.get('/api/user/balance', {
  //           headers: {
  //             Authorization: `Bearer ${user.token}`
  //           }
  //         });
  //         setBalance(response.data.balance);
  //       } catch (error) {
  //         setErrorMessage("Failed to fetch balance");
  //       } finally {
  //         setLoadingBalance(false);
  //       }
  //     }
  //   };

  //   fetchBalance();
  // }, [user]);

  const handleBetAmountChange = (e) => {
    setBetAmount(e.target.value);
    calculateTotal();
  };

  const handlePlaceBet = async () => {
    if (!user) {
      alert("You need to be logged in to place a bet.");
      return;
    }

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
    // API Integration: Replace the simulated timeout with actual API calls to register the bet on your backend.
    // Simulate API call
    setTimeout(() => {
      setErrorMessage("");
      setIsBetting(false);
      setBalance(balance - betAmountFloat);
      alert(`Bet placed successfully! Amount: ${betAmountFloat}`);
      setBetAmount("");
      setSelectedGames([]);
    }, 2000);
  };

  //API CALL
  //   try {
  //     const response = await axios.post('/api/placeBet', {
  //       userId: user.id,
  //       betAmount: betAmountFloat,
  //       games: selectedGames
  //     });

  //     if (response.status === 200) {
  //       setErrorMessage("");
  //       setIsBetting(false);
  //       setBalance(balance - betAmountFloat);
  //       // Show success message in the UI instead of alert
  //       setSuccessMessage(`Bet placed successfully! Amount: ${betAmountFloat}`);
  //       setBetAmount("");
  //       setSelectedGames([]);
  //     } else {
  //       throw new Error('Failed to place bet');
  //     }
  //   } catch (error) {
  //     setErrorMessage(error.message || "An error occurred while placing the bet.");
  //     setIsBetting(false);
  //   }
  // };

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
      {successMessage && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle mr={2}>Success!</AlertTitle>
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}
      {errorMessage && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
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
