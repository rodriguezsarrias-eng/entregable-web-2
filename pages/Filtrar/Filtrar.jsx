import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Filtrar.css'

const STATUSES = ['all', 'alive', 'dead', 'unknown']
const GENDERS = ['all', 'female', 'male', 'genderless', 'unknown']
const SPECIES = ['all', 'human', 'alien', 'humanoid', 'robot', 'animal', 'mythological creature', 'unknown']
const API_BASE_URL = 'https://rickandmortyapi.com/api/character'

const Filtrar = () => {
  const [filters, setFilters] = useState({
    name: '',
    status: 'all',
    gender: 'all',
    species: 'all',
  })
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPersonajes, setTotalPersonajes] = useState(0)
  const [totalPaginas, setTotalPaginas] = useState(0)

  const buildQueryString = () => {
    const params = new URLSearchParams()

    if (filters.name.trim()) params.set('name', filters.name.trim())
    if (filters.status !== 'all') params.set('status', filters.status)
    if (filters.gender !== 'all') params.set('gender', filters.gender)
    if (filters.species !== 'all') params.set('species', filters.species)
    if (paginaActual > 1) params.set('page', paginaActual)

    return params.toString() ? `?${params.toString()}` : ''
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      setError('')
      setPersonajes([])

      try {
        const query = buildQueryString()
        const url = `${API_BASE_URL}${query}`
        const response = await fetch(url)

        if (!response.ok) {
          if (response.status === 404) {
            setError('No se encontraron personajes con esos filtros.')
            return
          }
          throw new Error('Error al consultar la API')
        }

        const data = await response.json()
        setPersonajes(data.results || [])
        setTotalPersonajes(data.info?.count || 0)
        setTotalPaginas(data.info?.pages || 0)
      } catch (fetchError) {
        setError(fetchError.message || 'Error de conexión')
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [filters, paginaActual])

  const handleFilterChange = (event) => {
    const { name, value } = event.target
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }))
  }

  const handleReset = () => {
    setFilters({ name: '', status: 'all', gender: 'all', species: 'all' })
  }

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

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Filtra personajes de Rick and Morty</h1>
        <p className="about-text">
          Usa los filtros para consultar personajes reales de la API de Rick and Morty. Puedes filtrar
          por nombre, estado, género y especie.
        </p>

        <div className="filter-panel">
          <label className="filter-control">
            <span>Nombre</span>
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              placeholder="Ej. Rick"
            />
          </label>

          <label className="filter-control">
            <span>Estado</span>
            <select name="status" value={filters.status} onChange={handleFilterChange}>
              {STATUSES.map((option) => (
                <option key={option} value={option}>
                  {option === 'all' ? 'Todos' : option}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-control">
            <span>Género</span>
            <select name="gender" value={filters.gender} onChange={handleFilterChange}>
              {GENDERS.map((option) => (
                <option key={option} value={option}>
                  {option === 'all' ? 'Todos' : option}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-control">
            <span>Especie</span>
            <select name="species" value={filters.species} onChange={handleFilterChange}>
              {SPECIES.map((option) => (
                <option key={option} value={option}>
                  {option === 'all' ? 'Todos' : option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <span className="filter-actions">
          <button type="button" onClick={handleReset}>
            Limpiar filtros
          </button>
        </span>

        <div className="about-summary">
          <span className="summary-tag">
            {loading ? 'Cargando personajes...' : error ? error : `${totalPersonajes} personajes encontrados`}
          </span>
          {!loading && !error && (
            <span className="pagination-info">Página {paginaActual} de {totalPaginas}</span>
          )}
        </div>

        <div className="info-cards">
          {loading && <p className="status-text">Cargando personajes...</p>}
          {!loading && error && <p className="status-text status-error">{error}</p>}
          {!loading && !error && personajes.map((character) => (
            <Link
              key={character.id}
              to={`/personajes/${character.id}`}
              className="info-card-link"
            >
              <div className="info-card">
                <img className="character-image" src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p><strong>Estado:</strong> {character.status}</p>
                <p><strong>Especie:</strong> {character.species}</p>
                <p><strong>Género:</strong> {character.gender}</p>
              </div>
            </Link>
          ))}
        </div>
        <sapn className="about-pagination">
          <button onClick={paginaAnterior} disabled={paginaActual <= 1}>Página anterior</button>
          <button onClick={siguientePagina} disabled={paginaActual >= totalPaginas}>Siguiente página</button>
        </sapn>
      </div>
    </div>
  )
}

export default Filtrar