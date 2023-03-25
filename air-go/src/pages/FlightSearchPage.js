import React from 'react';
import SearchBar from '../components/SearchBar';


const popularDestinations = [
  { name: 'New York', image: 'https://picsum.photos/id/1015/200/200' },
  { name: 'Paris', image: 'https://picsum.photos/id/1042/200/200' },
  { name: 'Tokyo', image: 'https://picsum.photos/id/1025/200/200' },
  { name: 'Sydney', image: 'https://picsum.photos/id/1039/200/200' },
  { name: 'Barcelona', image: 'https://picsum.photos/id/1018/200/200' },
];

function FlightSearchPage() {
  return (
    <div className="container">
      <h3 style={{color:"white", marginTop:"25px", fontFamily:"Shrikhand"}}>Sky Is The Limit...</h3>
      <SearchBar />
      <div className="popular-destinations">
        {popularDestinations.map(destination => (
          <div key={destination.name} className="popular-destination">
            <img src={destination.image} alt={destination.name} width="80" height="80" />
            <span>{destination.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightSearchPage;

