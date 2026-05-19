import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const cardStyles = {
  width: '100%',
  maxWidth: 220,
  height: 380,
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(135deg, #16213e 0%, #0a0e27 100%)',
  border: '2px solid #1cff00',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 0 18px rgba(28, 255, 0, 0.35)',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 0 28px rgba(28, 255, 0, 0.55)',
    borderColor: '#b200ff',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(0,255,255,0.08), rgba(178,0,255,0.08))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    zIndex: 1,
  },
  '&:hover::before': {
    opacity: 1,
  },
}

const cardActionAreaStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  height: '100%',
}

const mediaStyles = {
  width: '100%',
  height: 140,
  objectFit: 'cover',
  backgroundColor: 'rgba(10,14,39,0.6)',
  filter: 'brightness(0.95)',
  transition: 'filter 0.3s ease',
  '&:hover': {
    filter: 'brightness(1.05)',
  },
}

const cardContentStyles = {
  backgroundColor: 'rgba(10, 14, 39, 0.75)',
  backdropFilter: 'blur(8px)',
  borderTop: '1px solid rgba(0, 255, 255, 0.15)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 1,
  padding: '8px',
  flex: 1,
  minHeight: 100,
}

const nameStyles = {
  color: '#00ffff',
  textShadow: '0 0 8px rgba(0,255,255,0.5)',
  fontWeight: 700,
  letterSpacing: '0.4px',
  fontFamily: 'Segoe UI, sans-serif',
  fontSize: '0.82rem',
  lineHeight: 1.1,
  textAlign: 'center',
  wordBreak: 'break-word',
  margin: 0,
  marginBottom: '2px',
}

const detailsStyles = {
  color: '#1cff00',
  fontWeight: 600,
  fontSize: '0.72rem',
  letterSpacing: '0.2px',
  textShadow: '0 0 6px rgba(28,255,0,0.45)',
  padding: '4px 6px',
  borderRadius: '4px',
  backgroundColor: 'rgba(28,255,0,0.05)',
  border: '1px solid rgba(28,255,0,0.1)',
  textAlign: 'center',
  wordBreak: 'break-word',
}

const CardCharacter = ({ name, image, gender, species, status }) => {
  return (
    <Card sx={cardStyles}>
      <CardActionArea sx={cardActionAreaStyles}>
        <CardMedia component="img" image={image} alt={name} sx={mediaStyles} />

        <CardContent sx={cardContentStyles}>
          <Typography variant="h6" sx={nameStyles}>
            {name}
          </Typography>

          <Typography variant="body2" sx={detailsStyles}>
            {gender} | {species} | {status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardCharacter;