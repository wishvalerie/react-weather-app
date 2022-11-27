import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="card border-warning mb-3">
        <div className="card-header">{day()}</div>
        <div className="card-body">
          <WeatherIcon code={props.data.weather[0].icon} size={46} />
          <p className="card-text">
            <span className="WeatherForecast-temperature-max">
              {maxTemperature()}{" "}
            </span>
            /
            <span className="WeatherForecast-temperature-min">
              {" "}
              {minTemperature()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
