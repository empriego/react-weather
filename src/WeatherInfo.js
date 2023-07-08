import React from "react";

// Components
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

// Styles
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row px-md-5 weather-info">
      <div className="row p-0 mx-0 mb-2 col-md-6 align-items-center">
        <div className="col-6 m-0">
          <div className="sunny-lg pr-2 clearflix float-end">
            <WeatherIcon size={120} code={props.data.icon} />
          </div>
        </div>
        <div className="col-6 px-0 d-flex justify-content-start">
          <div className="row p-0 m-0 align-self-end text-capitalize">
            <h2 id="searched-city">{props.data.city}</h2>
            <ul>
              <li id="time-date">
                <FormattedDate date={props.data.date} />
              </li>
              <li id="description">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row p-0 mx-0 mb-2 col-md-6 col-sm-12 align-items-center ">
        <WeatherTemperature
          celsius={props.data.temperature}
          wind={props.data.wind}
          humidity={props.data.humidity}
        />
      </div>
    </div>
  );
}
