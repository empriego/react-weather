import React from "react";
import "./WeekForecast.css";
import Wind from "./img/wind.png";
import Cloud from "./img/03d.png";
import Fog from "./img/50d.png";
import SunCloud from "./img/02d.png";
import Thunder from "./img/11d.png";
import Rain from "./img/09d.png";

export default function WeekForecast() {
  return (
    <div className="week-forecast">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-xs-6 py-2 text-center">
          <h3>Wed</h3>
          <img src={Wind} className="img-forecast-sm" alt="" />
          <p>
            14°<span className="p-soft"> | 2°</span>
          </p>
        </div>
        <div className="col-md-2 col-sm-6 col-xs-6 py-2 text-center">
          <h3>Thu</h3>
          <img src={SunCloud} className="img-forecast-sm" alt="" />
          <p>
            10°<span className="p-soft"> | -1°</span>
          </p>
        </div>
        <div className="col-md-2 col-sm-6 col-xs-6 py-2 text-center">
          <h3>Fri</h3>
          <img src={Cloud} className="img-forecast-sm" alt="" />
          <p>
            16°<span className="p-soft"> | 4°</span>
          </p>
        </div>
        <div className="col-md-2 col-sm-6 col-xs-6 py-2 text-center">
          <h3>Sat</h3>
          <img src={Fog} className="img-forecast-sm" alt="" />
          <p>
            8°<span className="p-soft"> | 0°</span>
          </p>
        </div>
        <div className="col-md-2 text-center py-2 col-sm-6 col-xs-6">
          <h3>Sun</h3>
          <img src={Thunder} className="img-forecast-sm" alt="" />
          <p>
            14°<span className="p-soft"> | 2°</span>
          </p>
        </div>
        <div className="col-md-2 col-sm-6 text-center py-2 col-sm-6 col-xs-6">
          <h3>Mon</h3>
          <img src={Rain} className="img-forecast-sm" alt="" />
          <p>
            4°<span className="p-soft"> | -4°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
