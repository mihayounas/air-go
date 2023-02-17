import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

function SearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [tripType, setTripType] = useState("roundtrip");

  const handleRadioChange = (event) => {
    setTripType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for flights...");
    console.log(`From: ${from}`);
    console.log(`To: ${to}`);
    console.log(`Departure Date: ${departureDate}`);
    console.log(`Arrival Date: ${arrivalDate}`);
    console.log(`Trip Type: ${tripType}`);
  };

  return (
    <form className={styles["search-form"]} onSubmit={handleSubmit}>
      <div className={styles["form-group"]}>
        <label htmlFor="from-input">From</label>
        <input
          type="text"
          id="from-input"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          placeholder="Departure Airport"
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="to-input">To</label>
        <input
          type="text"
          id="to-input"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          placeholder="Arrival Airport"
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="departure-date-input">Departure Date</label>
        <input
          type="date"
          id="departure-date-input"
          value={departureDate}
          onChange={(event) => setDepartureDate(event.target.value)}
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="return-date-input">Return Date</label>
        <input
          type="date"
          id="return-date-input"
          value={arrivalDate}
          onChange={(event) => setArrivalDate(event.target.value)}
          disabled={tripType === "oneway"}
        />
      </div>
      <div className={styles["form-group"]}>
        <label>Trip Type</label>
        <div className={styles["radio-buttons"]}>
          <label>
            <input
              type="radio"
              name="trip-type"
              value="roundtrip"
              checked={tripType === "roundtrip"}
              onChange={handleRadioChange}
            />
            Round Trip
          </label>
          <label>
            <input
              type="radio"
              name="trip-type"
              value="oneway"
              checked={tripType === "oneway"}
              onChange={handleRadioChange}
            />
            One Way
          </label>
        </div>
      </div>
      <button type="submit">Search Flights</button>
    </form>
  );
}

export default SearchBar;