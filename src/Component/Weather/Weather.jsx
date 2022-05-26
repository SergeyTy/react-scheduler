import React from 'react';
import './Weather.module.css';
// import { Card } from 'semantic-ui-react'
// import moment from 'moment';

const Weather = ({weatherData}) => (
    <div>  
        <p>data: {weatherData.temp}</p>
        <p>Temprature: {weatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} %</p> 
        <p>feels: {weatherData.main.feels_like} &deg;C</p> 
        <p>City Name: {weatherData.name}</p>
    </div>
)

export default Weather;