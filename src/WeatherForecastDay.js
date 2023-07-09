import React from "react";

// Components
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <span className="">
      <div className="forecast-date">
        <h3>{day()}</h3>
      </div>
      <div className="img-forecast-sm">
        <WeatherIcon size={props.data.icon} code="01d" />
      </div>
      <div class="forecast-temperature">
        <p>
          <span className="forecast-max-temperature pr-1">{maxTemp()}</span>
          <span className="p-soft px-1">|</span>
          <span className="p-soft forecast-min-temperature pl-1">
            {minTemp()}
          </span>
        </p>
      </div>
    </span>
  );
}
