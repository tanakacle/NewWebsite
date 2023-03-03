import React from 'react'
import { BrowserRouter as Route, Link, Router, Routes } from 'react-router-dom'
import './style.css'
function RecipeList() {
  return (
    <div className='recipelist'>
      <button>
        <Link to='/recipepage'>レシピ一覧を見る</Link>
      </button>
    </div>
  )
}

export default RecipeList
