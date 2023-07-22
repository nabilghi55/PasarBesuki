// src/Map.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  // Replace YOUR_ACCESS_TOKEN with your Mapbox access token
  const accessToken = "YOUR_ACCESS_TOKEN";

  // Replace LATITUDE and LONGITUDE with the coordinates of Desa Besuki Tulung Agung
  const latitude = -7.9435;
  const longitude = 111.4188;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={12}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
        id="mapbox/streets-v11"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Desa Besuki Tulung Agung
          <br />
          Latitude: {latitude}, Longitude: {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
