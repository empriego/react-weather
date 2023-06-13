import React from "react";
import "./App.css";

// components
import NavBar from "./NavBar";
import CurrentWeather from "./CurrentWeather";
import WeekForecast from "./WeekForecast";
import CreditLabel from "./CreditLabel";

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
      <CreditLabel />
    </div>
  );
}
