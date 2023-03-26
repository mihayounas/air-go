import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopularItem from './PopularItem';
import styles from "../styles/PopularDestinations.module.css"

const PopularLocations = () => {
  const [popularDestinations, setPopularDestinations] = useState([]);

  const SKYSCANNER_BROWSE_QUOTES_API = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/anywhere/anytime';

  const getPopularDestinations = async () => {
    const response = await axios.get(SKYSCANNER_BROWSE_QUOTES_API, {
      headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
        'X-RapidAPI-Host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
      }
    });
    setPopularDestinations(response.data.Quotes);
  };

  useEffect(() => {
    getPopularDestinations();
  }, []);

  return (
    <div className={styles["popular-destinations"]}>
      {popularDestinations.slice(0, 1).map((destination) => (
        <PopularItem destination={destination} />
      ))}
    </div>
  );
};

export default PopularLocations;
