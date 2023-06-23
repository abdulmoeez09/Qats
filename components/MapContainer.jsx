import React from "react";


const MapContainer = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="100%"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Najma%20Al%20Taef%20building%20Contracting%20LLC&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        
        ></iframe>
      </div>
    </div>
  );
};

export default MapContainer;