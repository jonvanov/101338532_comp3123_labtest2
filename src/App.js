// src/App.js
import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  // TEMP: Use local JSON instead of API
  const getWeather = async () => {
    const response = await fetch("/data/weather_api_output.json");
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Weather App</h2>
      <button onClick={getWeather}>Load Weather</button>

      {weather && weather.main && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°K</p>
          <p>Condition: {weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;
