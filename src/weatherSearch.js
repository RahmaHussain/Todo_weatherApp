import React, { useState } from "react";
import axios from "axios";
import AnimatedWeather from "react-animated-weather";

const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

function WeatherSearch () {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  function search() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_APIKEY}`

        // `${apiKeys.base}weather?q=${
        //   query !== "[object Object]" ? query : ""
        // }&units=metric&APPID=${apiKeys.key}`
      )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
        setError("");
      })
      .catch(function (error) {
        console.log("Error fetching weather data:", error);
        setWeather("");
        setQuery("");
        setError({ message: "Not Found", query: query });
      });
  };

  return (
    <>
    <h4>WeatherApp</h4>
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search any city"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button onClick={search}>Search</button>

      {error && <p>{error.message}</p>}

      {weather && weather.name && (
        <div>
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Main: {weather.weather[0].main}</p>
          <p>Country: {weather.sys.country}</p>
          <AnimatedWeather
            icon={weather.weather[0].main}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
      )}
    </div>
    </>
  );
};


export default WeatherSearch;
