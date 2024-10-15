import { BrowserRouter as 
  Router,
  Routes,
  Route
 } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import { getId } from './utils/helpers'
import Home from './pages/Home'
import AddCard from './pages/AddCard'

function App() {

  // usestate for managing cards
  const [cards, setCards] = useState([])

  // func add new card
  const addCard = (newCard) => {
    if (cards.length >= 4) {
      alert("Maximum number of cards exceeded, delete cards to add more.")
    }

    setCards([...cards, { ...newCard, id: getId() }])
  }

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id))
  }

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home cards={cards} deleteCard={deleteCard} />} />
          <Route path="/addcard" element={<AddCard addCard={addCard} />} />
        </Routes>
    </Router>
  )
}

export default App
