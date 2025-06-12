import React, { useEffect, useState, useContext } from 'react'
import WheatherContext from '../../context/WeatherContext'
import { Link } from 'react-router-dom'
import './WeatherInfo.css'

export default function WeatherInfo() {
    const contextValue = useContext(WheatherContext)

    useEffect(() => {
        console.log(contextValue.weatherInfo.main)
    }, [])




    return (
        <div className='weatherInfoWapper'>
            <div className="leftWeatherInfo">

                {contextValue.weatherInfo.cod == "404" || contextValue.weatherInfo.main == undefined ? "NO Value" : <>
                    <span className='tempWeather'>{contextValue.weatherInfo.main.temp}</span>
                    <h3 className='cityName'>{contextValue.weatherInfo.name}</h3>
                </>}
                <Link to="/" className="link">Back</Link>
            </div>
        </div>
    )
}
