import React from "react";
import styles from "./FooterTop.module.css";
import Dropdown from "../Dropdown";

const languages = ["Albanian", "English", "Italian"];

export default function FooterTop() {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.footer__help}>
        <h2>Help</h2>
        <ul>
          <li>Deposits</li>
          <li>Withdrawals</li>
          <li>Contact Us</li>
          <li>bet365 FAQ</li>
          <li>Terms and Conditions</li>
          <li>Responsible Gambling</li>
          <li>Technical Issues</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
          <li>Fair Payouts</li>
          <li>Complaints Procedure</li>
          <li>Rules</li>
          <li>Gaming Guide</li>
        </ul>
      </div>
      <div className={styles.footer__forms}>
        <h2>Forms & Stats</h2>
        <ul>
          <li>Sports & Betting News</li>
          <li>Soccer Stats</li>
          <li>Sports Stats</li>
          <li>Horse Form</li>
          <li>Horse Search</li>
          <li>UK & Irish Racing Archive</li>
          <li>Australian Horse Form</li>
          <li>US Horse Form</li>
          <li>UK & Irish Greyhound Form</li>
        </ul>
      </div>
      <div className={styles.footer__settings}>
        <div className="settings">
          <h2>Settings</h2>
          <ul>
            <li>
              <Dropdown options={languages} header="Languages" />
            </li>
            <li>Odds Display</li>
          </ul>
        </div>
        <div className={styles.results}>
          <h2>Scores & Results</h2>
          <ul>
            <li>Live Scores</li>
            <li>Results</li>
          </ul>
        </div>
        <div className={styles.promotions}>
          <h2>Promotions</h2>
          <ul>
            <li>Open Account Offer</li>
          </ul>
        </div>
        <div className="audio">
          <h2>Audio</h2>
          <ul>
            <li>Horse Racing</li>
            <li>Greyhounds</li>
            <li>Soccer</li>
            <li>Cricket</li>
            <li>Six Nations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
