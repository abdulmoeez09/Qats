import React, { Component } from 'react';
import {Map , GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '30%',
  height: '30%'
};

const MapContainer =()=> {
    return (
      <Map
        google={google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: 30.574420,
            lng: 31.501290
          }
        }
      />
    );
  }

export default GoogleApiWrapper ({
  apiKey: "AIzaSyDCM2AVamUFDrMZ5Ov3Z3jldgbuj03X2Io"
})(MapContainer);
