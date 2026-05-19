import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Error.css'

const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Wubba Lubba Dub Dub!</h2>
        <p className="error-message">
          Parece que has encontrado una dimensión que no existe...
        </p>
        <p className="error-submessage">
          La página que buscas se perdió en el multiverso. ¡Vuelve antes de que sea demasiado tarde!
        </p>
        <button className="error-button" onClick={() => navigate('/')}>
          Volver al Portal de Inicio
        </button>
      </div>
      <div className="error-decoration">
        <div className="glitch-text">404</div>
      </div>
    </div>
  )
}

export default Error