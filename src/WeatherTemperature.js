import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weather-temperature row p-0 mx-0 mb-2 align-items-center ">
      <div className="col-6 m-0 px-2">
        <h1 className="px-1 d-flex clearflix float-end" id="degrees">
          {Math.round(props.celsius)}
        </h1>
      </div>

      <div className="col-6 d-flex justify-content-start">
        <div className="row px-0 align-self-end">
          <h2 className="px-0">
            <span className="metric">°C</span>
          </h2>
          <ul>
            <li id="wind">Wind: {props.wind} km/h</li>
            <li id="humidity">Humidity: {props.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Unit convetion

//   const [unit, setUnit] = useState("celsius");

//   function showFahrenheit(event) {
//     event.preventDefault();
//     setUnit("Fahrenheit");
//   }

//   function showCelsius(event) {
//     event.preventDefault();
//     setUnit("celsius");
//   }

//   if (unit === "celsius") {
//     return (
//       <div className="weather-temperature row p-0 mx-0 mb-2 align-items-center ">
//         <div className="col-6 m-0 px-2">
//           <h1 className="px-1 d-flex clearflix float-end" id="degrees">
//             {Math.round(props.celsius)}
//           </h1>
//         </div>

//         <div className="col-6 d-flex justify-content-start">
//           <div className="row px-0 align-self-end">
//             <h2 className="px-0">
//               <span className="metric">
//                 °C |{" "}
//                 <a href="/" onClick={showFahrenheit} className="imperial">
//                   °F
//                 </a>
//               </span>
//             </h2>
//             <ul>
//               <li id="wind">Wind: {props.wind} km/h</li>
//               <li id="humidity">Humidity: {props.humidity}%</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     let fahrenheit = (props.celsius * 9) / 5 + 32;
//     return (
//       <div className="weather-temperature row p-0 mx-0 mb-2 align-items-center ">
//         <div className="col-6 px-1 m-0 px-2">
//           <h1 className="px-1 d-flex clearflix float-end" id="degrees">
//             {Math.round(fahrenheit)}
//           </h1>
//         </div>

//         <div className="col-6 d-flex justify-content-start">
//           <div className="row px-0 align-self-end">
//             <h2 className="px-0">
//               <span className="metric">
//                 <a href="/" onClick={showCelsius} className="imperial">
//                   °C
//                 </a>{" "}
//                 | °F
//               </span>
//             </h2>
//             <ul>
//               <li id="wind">Wind: {props.wind} km/h</li>
//               <li id="humidity">Humidity: {props.humidity}%</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
