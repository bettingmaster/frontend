"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
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
    src: "/assets/content-icons/darts-icon.png",
    alt: "Roulette ball icon",
    text: "Roulette",
  },
];

export default function MainNavContent() {
  const [activeIconId, setActiveIconId] = useState(1);
  const router = useRouter();

  const handleClick = (id, link) => {
    setActiveIconId(id);
    if (link) {
      router.push(link);
    }
  };

  return (
    <>
      <nav className={`container ${styles.main_content__nav}`}>
        <ul className={styles.main_content__icons}>
          {icons.map((icon) => (
            <li key={icon.id} onClick={() => handleClick(icon.id, icon.link)}>
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
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
