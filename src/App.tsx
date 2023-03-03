import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './compornents/Pages/Home/Home'
import RecipePage from './compornents/Pages/RecipePage/RecipePage/RecipePage'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipepage' element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
