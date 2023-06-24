import React from "react";
import "./App.css";

// components
import NavBar from "./NavBar";
import CurrentWeather from "./CurrentWeather";
import WeekForecast from "./WeekForecast";
import CreditLabel from "./CreditLabel";

export default function App() {
  return (
    <div className="App container pt-5">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <NavBar />
          <CurrentWeather defaultCity="Bath" />
          <WeekForecast />
        </div>
      </div>
      <CreditLabel />
    </div>
  );
}
