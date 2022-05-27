import React from 'react';
import './Weather.module.css';
// import { Card } from 'semantic-ui-react'
// import moment from 'moment';

const Weather = ({weatherData}) => (
    <div className="Weather">  
        <h4>Wheather Data: {weatherData.temp}</h4>
        <h3>Temperature: {Math.round(weatherData.main.temp - 273)} &deg;C</h3>
        <h3>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h3>
        <h3>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h3>
        <h3>Description: {weatherData.weather[0].main}</h3>
        <h3>Humidity: {weatherData.main.humidity} %</h3> 
        <h3>Feels: {Math.round(weatherData.main.feels_like - 273)} &deg;C</h3> 
        <h3>City Name: {weatherData.name}</h3>
        <h5 style={{"text-align": "left", "margin": "1em 0 0 0"}}>by Pasha</h5>
    </div>
)

export default Weather;