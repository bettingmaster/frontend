import React from "react";
import styles from "./MainHeadContent.module.css";
import SearchBar from "./SearchBar";

export default function MainHeadContent() {
  return (
    <header
      className={`container flex-between-center ${styles.main_content__head}`}
    >
      <div className={`flex-between-center ${styles.main_content__left_head}`}>
        <SearchBar />
      </div>
    </header>
  );
}
