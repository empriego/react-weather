import React from "react";

// Components
import WeatherIcon from "./WeatherIcon";

// Styles
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="weather-forecast">
      <div className="col-md-2 col-sm-6 col-xs-6 py-2 text-center">
        <div className="forecast-date">
          <h3>Mon</h3>
        </div>
        <div className="img-forecast-sm">
          <WeatherIcon size={60} code="01d" />
        </div>
        <div class="forecast-temperature">
          <p>
            <span className="forecast-max-temperature">30°</span>
            <span className="p-soft">|</span>
            <span className="p-soft forecast-min-temperature">10°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
