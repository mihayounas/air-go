import { useState } from 'react';

function FlightBookingOptions() {
  const [travelClass, setTravelClass] = useState('Economy');
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const travelClassOptions = ['Economy', 'Premium Economy', 'Business Class', 'First Class'];

  function handleTravelClassChange(event) {
    setTravelClass(event.target.value);
  }

  function handleNumAdultsChange(event) {
    setNumAdults(event.target.value);
  }

  function handleNumChildrenChange(event) {
    setNumChildren(event.target.value);
  }

  return (
    <div>
      <label htmlFor="travel-class">Travel Class:</label>
      <select id="travel-class" value={travelClass} onChange={handleTravelClassChange}>
        {travelClassOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <label htmlFor="num-adults">Adults (Aged 16+):</label>
      <select id="num-adults" value={numAdults} onChange={handleNumAdultsChange}>
        {[...Array(10).keys()].map(i => (
          <option key={i} value={i+1}>{i+1}</option>
        ))}
      </select>

      <label htmlFor="num-children">Children (Aged 0-15):</label>
      <select id="num-children" value={numChildren} onChange={handleNumChildrenChange}>
        {[...Array(10).keys()].map(i => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>
  );
}
export default FlightBookingOptions;