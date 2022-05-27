import React from 'react';
import './Weather.module.css';
// import { Card } from 'semantic-ui-react'
// import moment from 'moment';

const Weather = ({weatherData}) => (
    <div className="Weather">  
        <h4>Погода сейчас: {weatherData.temp}</h4>
        <h3>Температура: {Math.round(weatherData.main.temp - 273)} &deg;C</h3>
        <h3>Рассвет: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('ru-IN')}</h3>
        <h3>Закат: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('ru-IN')}</h3>
        <h3>Облачность: {weatherData.weather[0].main}</h3>
        <h3>Влажность: {weatherData.main.humidity} %</h3> 
        <h3>Ощущается как: {Math.round(weatherData.main.feels_like - 273)} &deg;C</h3> 
        <h3>Город: {weatherData.name}</h3>
        <h5 style={{"text-align": "left", "margin": "1em 0 0 0"}}>Weather by Pasha</h5>
    </div>
)

export default Weather;