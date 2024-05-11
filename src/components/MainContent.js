"use client";
import React from "react";
import MainHeadContent from "./MainContent/MainHeadContent";
import ShowGames from "@/components/ShowGames";
import Footer from "./Footer";
import Rightbar from "./Rightbar";
import MainNavContent from "./MainContent/MainNavContent";
import Navbar from "./Navbar";
import styles from "./MainContent.module.css";
import { DataProvider } from "../context/DataContext";
import { SelectedGamesProvider } from "../context/SelectedGameContext";

export default function MainContent() {
  return (
    <>
      <main className={styles.content}>
        <section className={styles.main_content}>
          <DataProvider>
            <SelectedGamesProvider>
              <Navbar />
              <MainHeadContent />
              <MainNavContent />
              <ShowGames />
              <Rightbar />
              <Footer />
            </SelectedGamesProvider>
          </DataProvider>
        </section>
      </main>
    </>
  );
}
