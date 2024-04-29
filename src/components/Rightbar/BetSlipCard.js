// const handleBetAmountChange = (e) => {
//   setBetAmount(e.target.value);
// };

// const handlePlaceBet = () => {
//   // Validate bet amount
//   const betAmountFloat = parseFloat(betAmount);
//   if (isNaN(betAmountFloat) || betAmountFloat <= 0) {
//     setErrorMessage("Please enter a valid bet amount.");
//     return;
//   }

//   // Check if balance is sufficient
//   if (betAmountFloat > balance) {
//     setErrorMessage("Insufficient balance.");
//     return;
//   }

//   // Perform bet placing logic here
//   setIsBetting(true);
//   setTimeout(() => {
//     // Simulate bet placing
//     setErrorMessage("");
//     setIsBetting(false);
//     setBalance(balance - betAmountFloat);
//     alert(`Bet placed successfully! Amount: ${betAmountFloat}`);
//     setBetAmount("");
//   }, 2000);
// };

// const removeMatch = (id) => {
//   setMatches(matches.filter((match) => match.id !== id));
// };

//   return (
//     <Box p="4" borderWidth="1px" borderRadius="md">
//       <Flex justify="space-between" align="center" mb="4">
//         <Text>Place a Bet</Text>
//         <Text>Balance: {balance}</Text>
//       </Flex>
//       <VStack spacing="4">
//         <FormControl id="bet-amount" isRequired>
//           <FormLabel>Bet Amount</FormLabel>
// <Input
//   type="number"
//   value={betAmount}
//   onChange={handleBetAmountChange}
// />
//         </FormControl>
//         {errorMessage && <Text color="red.500">{errorMessage}</Text>}
//         {matches.map((match) => (
//           <Flex key={match.id} justify="space-between" align="center">
//             <Text>
//               {match.team} - Odds: {match.odds}
//             </Text>
//             <CloseButton onClick={() => removeMatch(match.id)} />
//           </Flex>
//         ))}
// <Button
//   colorScheme="blue"
//   isLoading={isBetting}
//   loadingText="Placing Bet..."
//   onClick={handlePlaceBet}
// >
//           Place Bet
//         </Button>
//       </VStack>
//     </Box>
//   );
// };

// export default BetSlipCard;

import React, { useState } from "react";
import styles from "./BetSlipCard.module.css";
import { Button } from "@chakra-ui/react";

export default function BetSlipCard() {
  const [balance, setBalance] = useState(500); // Initial balance
  const [betAmount, setBetAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isBetting, setIsBetting] = useState(false);
  const [matches, setMatches] = useState([
    { id: 1, teams: { homeTeam: "Team A", awayTeam: "Team B" }, odds: 1.5 },
    { id: 2, teams: { homeTeam: "Team C", awayTeam: "Team D" }, odds: 2.0 },
    { id: 3, teams: { homeTeam: "Team E", awayTeam: "Team F" }, odds: 2.5 },
  ]);

  const handleBetAmountChange = (e) => {
    setBetAmount(e.target.value);
  };

  const handlePlaceBet = () => {
    // Validate bet amount
    const betAmountFloat = parseFloat(betAmount);
    if (isNaN(betAmountFloat) || betAmountFloat <= 0) {
      setErrorMessage("Please enter a valid bet amount.");
      return;
    }

    // Check if balance is sufficient
    if (betAmountFloat > balance) {
      setErrorMessage("Insufficient balance.");
      return;
    }

    // Perform bet placing logic here
    setIsBetting(true);
    setTimeout(() => {
      // Simulate bet placing
      setErrorMessage("");
      setIsBetting(false);
      setBalance(balance - betAmountFloat);
      alert(`Bet placed successfully! Amount: ${betAmountFloat}`);
      setBetAmount("");
    }, 1000);
  };

  const removeMatch = (id) => {
    setMatches(matches.filter((match) => match.id !== id));
  };

  const calculateTotal = () => {
    if (!betAmount) return 0;
    const betAmountFloat = parseFloat(betAmount);
    const total =
      matches.reduce((acc, match) => acc * match.odds, 1) * betAmountFloat;
    return total.toFixed(2);
  };

  //BETSLIP COUNT
  const countSelectedGames = () => {
    return matches.length;
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
        <button className={styles.btn}>Multiple</button>
      </div>

      <div className={styles.match_list}>
        {matches.map((match) => (
          <div key={match.id} className={styles.match}>
            <span className={styles.matchName}>
              {match.teams.homeTeam} - {match.teams.awayTeam}
            </span>
            <div className={styles.odds}>
              <span className={styles.oddsValue}>{match.odds}</span>
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

      {/* <div className={styles.infoContainer}>
        <div className={styles.infoText}>Price</div>
        <div className={styles.infoText}>Winning Chance:</div>
      </div> */}
      <div className={styles.infoContainer}>
        <label htmlFor="bet-amount">Bet Amount: </label>
        <input
          id="bet-amount"
          type="number"
          value={betAmount}
          onChange={handleBetAmountChange}
          placeholder="0.00"
        />

        <div className={styles.infoText}>Total: {calculateTotal()}</div>
      </div>

      <Button
        isLoading={isBetting}
        loadingText="Placing Bet..."
        onClick={handlePlaceBet}
        className={styles.placeBetBtn}
      >
        Place Bet
      </Button>
    </div>
  );
}
