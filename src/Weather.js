import React, { Component, useState } from "react";
import axios from "axios";
import Lens from "./img/lens.png";

// Components
import WeatherInfo from "./WeatherInfo";

// Styles
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const units = "metric";
    const key = "3499ef150985eccadd080ff408a018df";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <nav className="d-flex justify-content-center">
          <form onSubmit={handleSubmit} className="d-flex" id="search-form">
            <input
              className="form-control search-field"
              type="text"
              placeholder=""
              aria-label="Search"
              id="search-input"
              onChange={handleCityChange}
            />
            <button className="btn btn-search" type="submit">
              <img src={Lens} className="img-button" alt="Search" />
            </button>
          </form>
        </nav>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>Loading notifications..</p>;
  }
}
