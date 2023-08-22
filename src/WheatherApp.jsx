import { useState } from "react"

export const WheatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '6d865e81fe17b3b87cbee028665e99c6'
    const difkelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)
    const [busqueda, setBusqueda] = useState(false)

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
            console.log(response)
            if(response.ok) { 
                const data = await response.json()
                setDataClima(data) 
                setBusqueda(true) 
            } else { 
                setBusqueda(true)
                setDataClima(null)
                throw new Error('La ciudad no existe o hubo un problema con el servidor')
            }
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
                
            
                dataClima? (
                    <div>
                        <h2>{dataClima.name}, {dataClima.sys.country}</h2>
                        <p>Temperature: {parseInt(dataClima?.main?.temp - difkelvin)+1}°C</p>
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
                                <img src="./siteError.png" alt="" />
                                <h3>Try to search with another city name</h3>
                            </div>
                       </>
                    ) : (<></>)
                ) 
            }
        </div>
    )
}
