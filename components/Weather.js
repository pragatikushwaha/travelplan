import React, { useState, useEffect } from 'react';

const Weather = ({ apiKey, location }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (apiKey && location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }, [apiKey, location]);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div>
      <h3>Weather in {location}</h3>
      <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
