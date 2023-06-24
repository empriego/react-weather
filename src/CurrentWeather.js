import React, { Component, useState } from "react";
import axios from "axios";
import Sunny from "./img/01d.png";

// Components
import FormattedDate from "./FormattedDate";

// Styles
import "./App.css";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row px-md-5 current-weather">
        <div className="row p-0 mx-0 mb-2 col-md-6 align-items-center">
          <div className="col-6 m-0">
            <img src={Sunny} className="sunny-lg pr-2 clearflix float-end" />
          </div>
          <div className="col-6 px-0 d-flex justify-content-start">
            <div className="row p-0 m-0 align-self-end text-capitalize">
              <h2 id="searched-city">{weatherData.city}</h2>
              <ul>
                <li id="time-date">
                  <FormattedDate date={weatherData.date} />
                </li>
                <li id="description">{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row p-0 mx-0 mb-2 col-md-6 col-sm-12 align-items-center ">
          <div className="col-6 m-0">
            <h1 className=" px-2 d-flex clearflix float-end" id="degrees">
              {Math.round(weatherData.temperature)}
            </h1>
          </div>

          <div className="col-6 d-flex justify-content-start">
            <div className="row px-0 align-self-end">
              <h2 className="px-0">
                <span className="degree-value" id="celsius">
                  °C
                </span>
              </h2>
              <ul>
                <li id="wind">Wind: {weatherData.wind} km/h</li>
                <li id="humidity">Humidity: {weatherData.humidity}%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const units = "metric";
    const key = "3499ef150985eccadd080ff408a018df";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=${units}`;
    axios.get(url).then(handleResponse);
    return <p>Loading notifications..</p>;
  }
}
