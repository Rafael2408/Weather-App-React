import { useState } from "react"

export const WheatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '6d865e81fe17b3b87cbee028665e99c6'
    const difkelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmitCiudad = (e) => {
        e.preventDefault()
        if(ciudad.length > 0) fetchClima()
    }

    const fetchClima = async() => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
        
            <h1>Weather App</h1>

            <form onSubmit={handleSubmitCiudad}>
                <input 
                    type="text" 
                    value={ciudad}
                    onChange={handleCambioCiudad}
                    placeholder="Input only your city"
                />
                <button type="submit">Search</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}, {dataClima.sys.country}</h2>
                        <p>Temperature: {parseInt(dataClima?.main?.temp - difkelvin)+1}°C</p>
                        <p>Weather condition: {dataClima.weather[0].description}</p>
                        <p>Latitude: {dataClima.coord.lat}</p>
                        <p>Longitude: {dataClima.coord.lon}</p>
                        
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
                    </div>
                )
            }
        </div>
    )
}
