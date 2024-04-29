"use client";

import Image from "next/image";
import styles from "./FooterBottom.module.css";
import React, { useState, useEffect } from "react";

export default function FooterBottom() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="info container">
      <div className={styles.info__sponsers}>
        <Image
          src="/assets/footer/internationalBettingIntegrity.png"
          alt="International Betting Integrity icon"
          width={162}
          height={30}
        />
        <Image
          src="/assets/footer/eCogra.png"
          alt="eCogra icon"
          width={72}
          height={42}
        />
        <Image
          src="/assets/footer/agog.png"
          alt="AGOG icon"
          width={71}
          height={25}
        />
        <Image
          src="/assets/footer/loketkansspel_v2.png"
          alt="LOKETKANSSPEL"
          width={100}
          height={30}
        />
        <Image
          src="/assets/footer/18.png"
          alt="Plus 18 icon"
          width={25}
          height={25}
        />
      </div>
      <div className={styles.info__text}>
        <div className={styles.info__text__left}>
          <p>What does gambling cost you? Stop on time. 18+</p>
          <div className={styles.logo_poster}>
            <Image
              src="/assets/footer/bet365-logo.png"
              alt="bet365 logo"
              width={95}
              height={22}
            />
          </div>
          <p>
            Registered Office: Hillside (New Media Malta) Plc, Office 1/2373,
            Level G, Quantum House, 75 Abate Rigord Street, Ta’ Xbiex, XBX 1120
            Malta
          </p>
          <p>© 2001-2024 bet365. All rights reserved.</p>
          <p>Server Time {currentTime}</p>
        </div>
        {/* <ul className={styles.info__text__right}>
          <li>Casino</li>
          <li>Live Casino</li>
          <li>Games</li>
          <li>Poker</li>
        </ul> */}
      </div>
      <div className={styles.info__policy}>
        <p>
          By accessing, continuing to use or navigating throughout this site you
          accept that we will use certain browser cookies to improve your
          customer experience with us. bet365 only uses cookies which will
          improve your experience with us and will not interfere with your
          privacy. Please refer to our
          <span className={styles.cookies}>Cookies Policy</span> for further
          information on our use of cookies and how you can disable or manage
          their use should you wish.
        </p>
        <p>
          This site is protected by reCAPTCHA and the Google
          <span className={styles.privacy}>Privacy Policy</span> and
          <span className={styles.privacy}>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
}
