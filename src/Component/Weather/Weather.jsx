import React from 'react';
import './Weather.module.css';
// import { Card } from 'semantic-ui-react'
// import moment from 'moment';

const Weather = ({weatherData}) => (
    <div className="Weather">  
        <h4>Wheather Data: {weatherData.temp}</h4>
        <h3>Temprature: {weatherData.main.temp} &deg;C</h3>
        <h3>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h3>
        <h3>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h3>
        <h3>Description: {weatherData.weather[0].main}</h3>
        <h3>Humidity: {weatherData.main.humidity} %</h3> 
        <h3>Feels: {weatherData.main.feels_like} &deg;C</h3> 
        <h3>City Name: {weatherData.name}</h3>
    </div>
)

export default Weather;