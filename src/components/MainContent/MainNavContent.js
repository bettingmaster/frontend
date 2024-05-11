"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MainNavContent.module.css";

const icons = [
  {
    id: 1,
    src: "/assets/content-icons/football-icon.png",
    alt: "Football icon",
    text: "Football",
    link: "/",
  },
  {
    id: 2,
    src: "/assets/content-icons/basketball-icon.png",
    alt: "Basketball icon",
    text: "Basketball",
    link: "/basketball",
  },
  {
    id: 3,
    src: "/assets/content-icons/tennis-icon.png",
    alt: "Tennis ball icon",
    text: "Tennis",
  },
  {
    id: 4,
    src: "/assets/content-icons/badminton-icon.png",
    alt: "Badminton icon",
    text: "Badminton",
  },
  {
    id: 5,
    src: "/assets/content-icons/volleyball-icon.png",
    alt: "Volleyball icon",
    text: "Volleyball",
  },
  {
    id: 6,
    src: "/assets/content-icons/cricket-icon.png",
    alt: "Cricket icon",
    text: "Cricket",
  },
  {
    id: 7,
    src: "/assets/content-icons/golf-icon.png",
    alt: "Golf icon",
    text: "Golf",
  },
  {
    id: 8,
    src: "/assets/content-icons/darts-icon.png",
    alt: "Darts icon",
    text: "Darts",
  },
  {
    id: 9,
    src: "/assets/content-icons/trotting-icon.png",
    alt: "Trotting icon",
    text: "Trotting",
  },
];

export default function MainNavContent() {
  const [activeIconId, setActiveIconId] = useState("");

  const handleClick = (id) => {
    setActiveIconId(id);
  };

  return (
    <nav className={`container ${styles.main_content__nav}`}>
      <ul className={styles.main_content__icons}>
        {icons.map((icon) => (
          <li key={icon.id} onClick={() => handleClick(icon.id)}>
            <Link href={icon.link || "/"}>
              <Image
                src={
                  icon.id === activeIconId
                    ? icon.src.replace(".png", "-active.png")
                    : icon.src
                }
                alt={icon.alt}
                width={32}
                height={35}
              />
              <p>{icon.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
