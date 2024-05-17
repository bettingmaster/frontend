"use client";
import styles from "./CategoriesNav.module.css";
import BackButton from "../BackButton";
import Link from "next/link";
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";

const CategoriesNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_inside}>
        <div className={styles.btn}>
          <BackButton>
            <IoArrowBack />
          </BackButton>
        </div>
        <span className={styles.text}>Soccer</span>
      </div>
      <div className={styles.nav_inside}>
        <span className={styles.text}>Live InPlay</span>
        <div className={styles.btn}>
          <Link href="/livegames">
            <IoArrowForwardOutline />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesNav;
