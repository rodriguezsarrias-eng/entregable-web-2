import { useState, useEffect } from 'react'
import './Characters.css'
import CardCharacter from '../../components/CardCharacter/CardCharacter'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'https://rickandmortyapi.com/api/character'
const PERSONAJES_POR_PAGINA = 20

const Characters = () => {
  const [personajes, setPersonajes] = useState([])
  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPersonajes, setTotalPersonajes] = useState(0)
  const [totalPaginas, setTotalPaginas] = useState(0)

  const obtenerPersonajes = async (numeroPagina) => {
    try {
      const response = await fetch(`${API_BASE_URL}?page=${numeroPagina}`)
      const data = await response.json()

      setPersonajes(data.results || [])
      setTotalPersonajes(data.info?.count || 0)
      setTotalPaginas(data.info?.pages || 0)
    } catch (error) {
      console.error('Error fetching characters:', error)
    }
  }

  useEffect(() => {
    obtenerPersonajes(paginaActual)
  }, [paginaActual])

  const siguientePagina = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual((prevPage) => prevPage + 1)
    }
  }

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual((prevPage) => prevPage - 1)
    }
  }

  const personajesParaMostrar = personajes.slice(0, PERSONAJES_POR_PAGINA)

  return (
    <>
      <h1 className="about-pagination-section h2">Todos los personajes</h1>

      <div className="containerPage borrar">
        {personajes.length === 0 ? (
          <p>Cargando Personajes...</p>
        ) : (
          personajesParaMostrar.map((character) => (
            <Link
              key={character.id}
              to={`/personajes/${character.id}`}
              className="character-link"
            >
              <CardCharacter
                name={character.name}
                image={character.image}
                gender={character.gender}
                species={character.species}
                status={character.status}
              />
            </Link>
          ))
        )}
      </div>

      <div className="about-pagination-section">
        <h2>Total personajes: {totalPersonajes}</h2>
        <h3>Página {paginaActual} de {totalPaginas}</h3>
        <span className="about-pagination">
          <button onClick={paginaAnterior} disabled={paginaActual === 1}>
            Página anterior
          </button>
          <button onClick={siguientePagina} disabled={paginaActual === totalPaginas}>
            Siguiente página
          </button>
        </span>
      </div>
    </>
  )
}

export default Characters