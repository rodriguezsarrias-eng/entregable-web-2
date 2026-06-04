import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

import Home from '../pages/Home/Home'
import Filtrar from '../pages/Filtrar/Filtrar'
import Characters from '../pages/Characters/Characters'
import CharacterDetail from '../pages/CharacterDetail/CharacterDetail'
import Error from '../pages/Error/Error'

function App() {
  const rootStyle = {
    width: '100%',
    minHeight: '100vh',
  }

  const contentStyle = {
    width: '100%',
    flex: '1 0 auto',
  }

  return (
    <div className="app-root" style={rootStyle}>
      <Router basename="/entregable-web-2/">
        <Header />
        <Nav />
        <main className='app-content' style={contentStyle}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/filtrar' element={<Filtrar />} />
            <Route path='/personajes' element={<Characters />} />
            <Route path='/personajes/:id' element={<CharacterDetail />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
