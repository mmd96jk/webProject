import React, { useState , useContext , useEffect} from 'react'
import WeatherContext from '../../context/WeatherContext'
import { Link , useNavigate } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {

    const contextValue = useContext(WeatherContext)
    const [city , setCity] = useState("")
    const [apiKey , setApiKey] = useState("3b428e3fcd4e993f57d2e58fb0e79048")
    const navigate = useNavigate()

    useEffect(() => {
        console.log(contextValue)
    }, [contextValue])

    const weatherInfoAction = () => {
        console.log(city)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            contextValue.setWeatherInfoAction(data)
        }).catch(() => {
            alert("ERROR")
        })
    }

    const keyDownEnter = (event) => {
        console.log(event)
        if(event.keyCode == 13) {
            weatherInfoAction()
            navigate('weather-info')
        }
    }

  return (
    <div className="searchBarWapper" onKeyDown={(event) => keyDownEnter(event)}>
        <div className="searchBarInput">
            <input type="text" onChange={(event) => setCity(event.target.value)} value={city} />
            <button className="searchBarBtn" onClick={weatherInfoAction}><Link to="weather-info" className='link'>OK</Link></button>
        </div>
    </div>
  )
}
