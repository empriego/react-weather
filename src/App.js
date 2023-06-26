import React from "react";
import "./App.css";

// components
import Weather from "./Weather";
import WeekForecast from "./WeekForecast";
import CreditLabel from "./CreditLabel";

export default function App() {
  return (
    <div className="App container py-5">
      <div className="weather-app-wrapper">
        <div className="weather-app pb-5">
          <Weather defaultCity="Bath" />
        </div>
      </div>
      <CreditLabel />
    </div>
  );
}
