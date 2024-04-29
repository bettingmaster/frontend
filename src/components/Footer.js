import React from "react";
import styles from "./Footer.module.css";
import FooterTop from "./Footer/FooterTop";
import FooterBottom from "./Footer/FooterBottom";

export default function Footer() {
  return (
    <footer className={styles.main_content__footer}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
