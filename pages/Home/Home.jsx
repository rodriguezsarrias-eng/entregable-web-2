import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="about-title"> Rick and Morty</h1>
        <p className="about-text">
          "Rick and Morty" es una serie de ciencia ficción y comedia que sigue las aventuras de Rick Sanchez,
          un científico alcohólico excéntrico, y su nieto Morty Smith mientras viajan a través del espacio y
          dimensiones alternativas en una nave impulsada por un portal.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <h3>Rick Sanchez</h3>
            <p>Un genio científico despreocupado que arrastra a su familia a sus experimentos.</p>
          </div>

          <div className="info-card">
            <h3>Morty Smith</h3>
            <p>Un adolescente ordinario que se ve envuelto en las aventuras caóticas de su abuelo.</p>
          </div>

          <div className="info-card">
            <h3>Aventuras Interdimensionales</h3>
            <p>Explora miles de universos paralelos y realidades alternativas llenas de peligro y comedia.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home