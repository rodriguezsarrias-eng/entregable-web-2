import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './CharacterDetail.css'

const CharacterDetail = () => {
    const [character, setCharacter] = useState(null);
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacter = async () => {
            if (!id) return;

            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                const data = await response.json()
                setCharacter(data)
            } catch (error) {
                console.error('Error fetching character details:', error)
            }
        }

        fetchCharacter()
    }, [id])

  return (
    <div>
      {character ? (
        <div className='CardCharacter'>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <button onClick={() => navigate(-1)}>Volver</button>
        </div>
      ) : (
        <p>Cargando detalles del personaje...</p>
      )}
    </div>
  )
}

export default CharacterDetail;