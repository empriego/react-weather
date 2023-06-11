import React from "react";
import "./CurrentWeather.css";
import "./App.css";
import Sunny from "./img/01d.png";

export default function CurrentWeather() {
  let weatherData = {
    city: "Zürich",
    date: "Tuesday 11:00",
    description: "Mostly sunny",
    temperature: "14",
    humidity: "54%",
    wind: "6",
  };

  return (
    <div className="row px-md-5 current-weather">
      <div class="row p-0 mx-0 mb-2 col-md-6 align-items-center ">
        <div className="col-6  m-0">
          <img
            src={Sunny}
            className="sunny-lg pr-2 clearflix float-end"
            alt={weatherData.description}
          />
        </div>
        <div className="col-6 px-0 d-flex justify-content-start">
          <div className="row p-0 m-0 align-self-end ">
            <h2 id="searched-city">{weatherData.city}</h2>
            <ul>
              <li id="time-date">{weatherData.date}</li>
              <li id="description">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row p-0 mx-0 mb-2 col-md-6 col-sm-12 align-items-center ">
        <div className="col-6  m-0 ">
          <h1 className=" px-2 d-flex clearflix float-end" id="degrees">
            {weatherData.temperature}
          </h1>
        </div>

        <div className="col-6 d-flex justify-content-start">
          <div className="row  px-0 align-self-end">
            <h2 className="px-0">
              <spam className="degree-value" id="celsius">
                °C
              </spam>
            </h2>
            <ul>
              <li id="wind">Wind: {weatherData.wind} km/h</li>
              <li id="humidity">Humidity: {weatherData.humidity}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
