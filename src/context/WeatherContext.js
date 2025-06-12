import { createContext } from 'react'

const WeatherContext = createContext({
    weatherInfo : null,
    setWeatherInfoAction : () => {}
})

export default WeatherContext