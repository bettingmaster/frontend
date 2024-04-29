"use client";
import React, { useState, useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./MainNav.module.css";
import ModalComp from "../ModalComp";
import SignupForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";

const MainNav = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
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
  };

  return (
    <nav className={`container flex-between-center ${styles.main_nav}`}>
      <div className={styles.main_nav__burger}>
        <i>
          <Button ref={btnRef} onClick={onOpen}>
            <HamburgerIcon boxSize={10} />
          </Button>
        </i>
      </div>
      <Link href="/">
        {/* <div className={styles.main_nav__logo}>
          <Image src={mainLogo} alt="logo" priority={true} />
        </div>
        <div className={styles.main_nav__alt_logo}>
          <Image src={smallLogo} alt="logo" priority={true} />
        </div> */}
        <div className={styles.main_nav__logo}>
          <img src="/assets/logos/main-logo.png" alt="logo" loading="lazy" />
          <img
            src="/assets/logos/small-logo.png"
            alt="logo"
            loading="lazy"
            className={styles.main_nav__alt_logo}
          />
        </div>
      </Link>
      <ul className={styles.main_nav__content}>
        <Link href="/allgames">
          <li className={router.pathname === "/allgames" ? styles.active : ""}>
            Sports
          </li>
        </Link>
        <Link href="/livegames">
          <li className={router.pathname === "/livegames" ? styles.active : ""}>
            Live
          </li>
        </Link>
      </ul>
      <div className={styles.main_nav__settings}>
        {/* <div className={styles.main_nav__search}>
          <i>
            <FaMagnifyingGlass fontSize={18} />
          </i>
        </div> */}
        <div className={styles.main_nav__join}>
          <button onClick={handleJoinClick}>Join</button>
        </div>
        <div className={styles.main_nav__login}>
          <button onClick={handleLoginClick}>Log in</button>
        </div>
      </div>
      <ModalComp isOpen={isJoinModalOpen} onClose={handleCloseModal}>
        <SignupForm onClose={handleCloseModal} />
      </ModalComp>
      <ModalComp isOpen={isLoginModalOpen} onClose={handleCloseModal}>
        <LoginForm />
      </ModalComp>

      <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </nav>
  );
};

export default MainNav;
