import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopularLocations = () => {
  const [popularDestinations, setPopularDestinations] = useState([]);

  const SKYSCANNER_API_KEY = 'YOUR_API_KEY_HERE';

  const getPopularDestinations = async () => {
    const response = await axios.get(`https://partners.api.skyscanner.net/apiservices/reference/v1.0/countries/en-US?apiKey=${SKYSCANNER_API_KEY}`);
    setPopularDestinations(response.data.Countries);
  };

  useEffect(() => {
    getPopularDestinations();
  }, []);

  return (
    <div>
      <h2>Popular Locations To Travel</h2>
      <ul>
        {popularDestinations.map((destination) => (
          <li key={destination.Id}>
            <img src={`https://content.r9cdn.net/rimg/dimg/${destination.ImageUrl}`} alt={destination.Name} />
            {destination.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularLocations;