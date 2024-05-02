"use client";
import { useState } from "react";
import React from "react";
import MainHeadContent from "./MainContent/MainHeadContent";
import styles from "./MainContent.module.css";
import ShowGames from "@/components/ShowGames";
import Footer from "./Footer";
import Rightbar from "./Rightbar";
import { DataProvider } from "@/context/DataContext";

export default function MainContent() {
  return (
    <DataProvider
      value={{
        handleSearch: handleSearch,
        gamesInfo,
        setgamesInfo,
        groupedGames,
      }}
    >
      <main className={styles.content}>
        <section className={styles.main_content}>
          <MainHeadContent />
          <ShowGames />
          <Footer />
          <Rightbar />
        </section>
      </main>
    </DataProvider>
  );
}
