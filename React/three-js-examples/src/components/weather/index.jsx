import React, { useState, useEffect } from "react";
import "./index.css"; // Import your CSS file

const API_KEY = "9e75394502b42be815ed947518ac9868";
function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London"); // Default city

  console.log("WEATHER", weather);

  const fetchWeather = async () => {
    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        throw new Error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, [city]); // Runs whenever city changes

  if (!weather) {
    return <div>Loading...</div>;
  }

  const { main, weather: weatherInfo, wind, sys, name } = weather;

  return (
    <div className='weather-app'>
      <h2>Weather App</h2>
      <div className='city-input'>
        <input
          type='text'
          placeholder='Enter city name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className='weather-card'>
        <div className='weather-info'>
          <div className='weather-location'>
            {name}, {sys.country}
          </div>
          <div className='weather-description'>
            {weatherInfo[0].description}
          </div>
          <div className='weather-temperature'>{Math.round(main.temp)}°C</div>
          <div className='weather-details'>
            <div>Humidity: {main.humidity}%</div>
            <div>Wind: {wind.speed} m/s</div>
          </div>
        </div>
        <div className='weather-icon'>
          <img
            src={`http://openweathermap.org/img/w/${weatherInfo[0].icon}.png`}
            alt='Weather Icon'
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
