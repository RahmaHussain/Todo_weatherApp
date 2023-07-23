import React from "react";
import CurrentLocation from "./currentLocation";
import WeatherSearch from "./weatherSearch";
import "./App.css";

function WeatherApp() {
  return (
    <div className="weatherapp">
      {/* <CurrentLocation /> */}
      <WeatherSearch />
    </div>
  );
}

export default WeatherApp;
