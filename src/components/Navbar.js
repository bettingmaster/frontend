"use client";

import React, { useState, useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";
import ModalComp from "./ModalComp";
import SignupForm from "./Forms/RegisterForm";
import LoginForm from "../components/Forms/LoginForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar/Sidebar";
import Image from "next/image";
import BetSlipCard from "../components/Rightbar/BetSlipCard";
// import { useSelectedGame } from "../context/SelectedGameContext";

const Navbar = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBetSlipOpen, setIsBetSlipOpen] = useState(false);

  // const { selectedGames } = useSelectedGame();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const btnRef = useRef();

  const handleJoinClick = () => {
    setIsJoinModalOpen(true);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsJoinModalOpen(false);
    setIsLoginModalOpen(false);
    setIsBetSlipOpen(false);
  };
  const handleBetClick = () => {
    setIsBetSlipOpen(true);
  };

  // console.log("selected", selectedGames);

  return (
    <header>
      <nav className={`container flex-between-center ${styles.main_nav}`}>
        <div className={styles.main_nav__burger}>
          <i>
            <Button
              colorScheme="teal"
              variant="solid"
              ref={btnRef}
              onClick={onOpen}
            >
              <HamburgerIcon boxSize={10} color="#fff" />
            </Button>
          </i>
        </div>
        <Link href="/">
          <div className={styles.main_nav__logo}>
            <Image
              src="/assets/logos/main-logo.png"
              alt="logo"
              loading="lazy"
              width={80}
              height={80}
            />
            <Image
              src="/assets/logos/small-logo.png"
              alt="logo"
              loading="lazy"
              className={`${styles.main_nav__alt_logo} ${
                router.pathname === "/" ? styles.active : ""
              }`}
              width={40}
              height={40}
            />
          </div>
        </Link>
        <ul className={styles.main_nav__content}>
          <Link href="/allgames">
            <li
              className={router.pathname === "/allgames" ? styles.active : ""}
            >
              Sports
            </li>
          </Link>

          <Link href="/livegames">
            <li
              className={router.pathname === "/livegames" ? styles.active : ""}
            >
              Live
            </li>
          </Link>

          <li onClick={handleBetClick} className={styles.main_nav__bet}>
            My Bets
            {/* {selectedGames.length > 0 && (
              <span className={styles.notificationBadge}>
                {selectedGames.length}
              </span>
            )} */}
          </li>
        </ul>
        <div className={styles.main_nav__settings}>
          <div className={styles.main_nav__join}>
            <button onClick={handleJoinClick}>Join</button>
          </div>
          <div className={styles.main_nav__login}>
            <button onClick={handleLoginClick}>Log in</button>
          </div>
        </div>
        <ModalComp
          size="xl"
          isOpen={isJoinModalOpen}
          onClose={handleCloseModal}
          color="#3B3B3B"
        >
          <SignupForm />
        </ModalComp>
        <ModalComp
          size="xl"
          isOpen={isLoginModalOpen}
          onClose={handleCloseModal}
          color="#3B3B3B"
        >
          <LoginForm />
        </ModalComp>
        <ModalComp
          size="full"
          isOpen={isBetSlipOpen}
          onClose={handleCloseModal}
          mt={35}
          color="#3B3B3B"
        >
          <BetSlipCard />
        </ModalComp>

        <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </nav>
    </header>
  );
};

export default Navbar;
