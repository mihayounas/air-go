import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      {popularDestinations.map((destination) => (
        <div className={styles["popular-destination"]} key={destination.QuoteId}>
          {destination.OutboundLeg.CarrierIds.map((carrierId) => (
            <img key={carrierId} src={`https://logos.skyscnr.com/images/airlines/favicon/${carrierId}.png`} alt={`Airline ${carrierId}`} />
          ))}
          <div>
            {destination.OutboundLeg.OriginPlace.CityName}, {destination.OutboundLeg.OriginPlace.CountryName}
          </div>
          <div>
            to
          </div>
          <div>
            {destination.OutboundLeg.DestinationPlace.CityName}, {destination.OutboundLeg.DestinationPlace.CountryName}
          </div>
          <div>
            for ${destination.MinPrice}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularLocations;



