import React from "react";
import styles from "./Rightbar.module.css";
import BetSlipCard from "./Rightbar/BetSlipCard";

export default function Rightbar() {
  return (
    <div className={styles.side_bar}>
      <BetSlipCard />
    </div>
  );
}
