import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Flights from './pages/Flights'
import CityContext from './contexts/CityContext'
import { useState } from 'react'
import FligthId from './pages/FlightId'
import FlightContext from './contexts/FlightContext'
import Header from './components/Header'
import Hotels from './pages/Hotels'

function App() {
  const [city, setCity] = useState(undefined)
  const [flightId, setFlightId] = useState(undefined)

  return (
    <CityContext.Provider value={{ city, setCity }}>
      <FlightContext.Provider value={{ flightId, setFlightId }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/passagens" element={<Flights />} />
            <Route path="/passagem/:id" element={<FligthId />} />
            <Route path="/hotels" element={<Hotels />} />
          </Routes>
        </BrowserRouter>
      </FlightContext.Provider>
    </CityContext.Provider>
  )
}

export default App
