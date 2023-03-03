import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Home/Footer/Footer'

function RecipePage() {
  return (
    <div>
      レシピ一覧 ああああああああ
      <Link to='/'>
        <button>Homeにもどる</button>
      </Link>
      <Footer />
    </div>
  )
}

export default RecipePage
