import React from 'react'
import ReactDOM from 'react-dom/client'
import { WheatherApp } from './WheatherApp'
import { Foot } from './Foot'
import './styles/weatherStyles.css'
import './styles/Footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheatherApp />
    <Foot/>
  </React.StrictMode>,
)
