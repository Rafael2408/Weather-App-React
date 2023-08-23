import { useState } from "react"
// assests imports  (img/video/etc)
import siteErrorImage from './assets/siteError.png';
import { Request } from "./hooks/Request";

export const WheatherApp = () => {
    const difkelvin = 273.15
    const [ciudad, setCiudad] = useState('')
    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const {dataClima, busqueda, handleSubmitCiudad} = Request()

    return (
        <div className="container flex-fill">
            <h1>Weather App</h1>
            <form onSubmit={(event) => handleSubmitCiudad(event, ciudad)}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                    placeholder="Input only your city"
                />
                <button type="submit">Search</button>
            </form>
            <div id="data">
                {
                dataClima ? (
                    <div>
                        <h2>{dataClima.name}, {dataClima.sys.country}</h2>
                        <p>Temperature: {parseInt(dataClima?.main?.temp - difkelvin) + 1}°C</p>
                        <p>Weather condition: {dataClima.weather[0].description}</p>
                        <p>Latitude: {dataClima.coord.lat}</p>
                        <p>Longitude: {dataClima.coord.lon}</p>

                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
                    </div>
                ) : (
                    busqueda ? (
                        <>
                            <div>
                                <h2>Not Found!</h2>
                                <img src={siteErrorImage} alt="" />  
                                {/* //  use {image} ↑↑*/}
                                <h3>Try to search with another city name</h3>
                            </div>
                        </>
                    ) : (<></>)
                )
            }
            </div>
        </div>
    )
}
