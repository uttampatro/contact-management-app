import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";

const customIcon = new L.DivIcon({
  className: "custom-icon",
  html: `
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C8.686 2 6 4.686 6 8c0 4 6 12 6 12s6-8 6-12c0-3.314-2.686-6-6-6zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#1E88E5"/>
</svg>


    `,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

interface CountryData {
  country: string;
  countryInfo: {
    _id: string;
    lat: number;
    long: number;
    flag: string;
  };
  active: number;
  recovered: number;
  deaths: number;
}

const CovidMap: React.FC = () => {
  const [countries, setCountries] = useState<CountryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries.map((country) => (
          <Marker
            key={country.countryInfo._id}
            position={
              [
                country.countryInfo.lat,
                country.countryInfo.long,
              ] as LatLngExpression
            }
            icon={customIcon}
          >
            <Popup>
              <img
                src={country.countryInfo.flag}
                alt={`Flag of ${country.country}`}
                style={{ width: "50px", height: "auto", marginBottom: "10px" }}
              />
              <strong>{country.country}</strong>
              <br />
              Active cases: {country.active}
              <br />
              Recovered cases: {country.recovered}
              <br />
              Deaths: {country.deaths}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CovidMap;
