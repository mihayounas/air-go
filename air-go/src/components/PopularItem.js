import React from 'react';
import styles from "../styles/PopularDestinations.module.css"

const PopularItem = ({ destination }) => {
  return (
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
  );
};

export default PopularItem;
