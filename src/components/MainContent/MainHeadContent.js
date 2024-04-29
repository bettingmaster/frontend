import React from "react";
import styles from "./MainHeadContent.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function MainHeadContent({ handleSearch }) {
  return (
    <header
      className={`container flex-between-center ${styles.main_content__head}`}
    >
      <div className={`flex-between-center ${styles.main_content__left_head}`}>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <Link href="/allgames">
        <div
          className={`${styles.main_content__right_head} flex-between-center`}
        >
          <p>All Matches</p>
          <i>
            <ChevronRightIcon w={8} h={8} />
          </i>
        </div>
      </Link>
    </header>
  );
}
