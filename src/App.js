import React from "react";
import "./App.css";

import NavBar from "./NavBar";
import CurrentWeather from "./CurrentWeather";
import WeekForecast from "./WeekForecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <NavBar />
            <CurrentWeather />
            <WeekForecast />
          </div>
        </div>
      </div>
    </div>
  );
}
