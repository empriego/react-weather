import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(`the weather in ${props.city} is ${response.data.main.temp}`);
  }

  const units = "metric";
  const key = "ed55b36e362d8733f7d859247cedeaf2";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=${units}`;
  axios.get(url).then(handleResponse);

  return <h2>weather</h2>;
}
