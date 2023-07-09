import React, { useState } from "react";
import axios from "axios";

// Components
import WeatherForecastDay from "./WeatherForecastDay";

// Styles
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="weather-forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div
                className="col-md-2 col-6 d-inline-flex justify-content-center text-center py-2"
                key={index}
              >
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    const key = "2718952144ed077c12e7c160fb6fc351";
    const units = "metric";
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
