import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "@/styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.content}>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
