import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';


function SearchBar() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Searching for flights...");
      console.log(`From: ${from}`);
      console.log(`To: ${to}`);
      console.log(`Date: ${date}`);
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
          <label htmlFor="date-input">Date</label>
          <input
            type="date"
            id="date-input"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <button type="submit">Search Flights</button>
      </form>
    );
  }

export default SearchBar;