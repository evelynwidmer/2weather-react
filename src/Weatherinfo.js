import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} /}
            </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={props.dataiconUrl}
                alt={props.data.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(temperature)}</span>
                <strong>{props.data.temperature}</strong>
                <span className="unit">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
        </div>
        );
}