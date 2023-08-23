import { useState } from "react"

export const Request = () => {
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '6d865e81fe17b3b87cbee028665e99c6'

    const [dataClima, setDataClima] = useState(null)
    const [busqueda, setBusqueda] = useState(false)

    const handleSubmitCiudad = (e, city) => {
        e.preventDefault()
        if (city.length > 0) fetchClima(city)
    }

    const fetchClima = async (city) => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
            if (response.ok) {
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

  return {
    dataClima,
    busqueda,
    handleSubmitCiudad
  }
}
