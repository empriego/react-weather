import React from "react";
import axios from "axios";

// Components
import WeatherIcon from "./WeatherIcon";

// Styles
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let key = "2718952144ed077c12e7c160fb6fc351";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`;

  axios.get(apiUrl).then(handleResponse);

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
            <span className="forecast-max-temperature pr-1">30°</span>
            <span className="p-soft forecast-min-temperature pl-1"> 10°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
