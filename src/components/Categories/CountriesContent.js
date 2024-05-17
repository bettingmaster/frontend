import React from "react";
import { useRouter } from "next/router";
import styles from "./CountriesContent.module.css";

const CoutriesContent = ({
  categories,
  setSelectedCountry,
  selectedCountry,
}) => {
  const router = useRouter();

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    router.push(`#${country}`);
  };

  return (
    <>
      {!selectedCountry && (
        <div className={styles.main_content}>
          <div className={styles.title}>Countries</div>
          <ul>
            {Object.keys(categories.football.countries).map((country) => (
              <li
                key={country}
                className={styles.countries_lists}
                onClick={() => handleCountryClick(country)}
              >
                {country.charAt(0).toUpperCase() + country.slice(1)}
                <span>➔</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CoutriesContent;
