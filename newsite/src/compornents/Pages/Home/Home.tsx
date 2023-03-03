import React from 'react'

import Footer from './Footer/Footer'
import MainImage from './MainImage/MainImage'
import Make from './Make/Make'
import Recipe from './Recipe/Recipe'
import RecipeList from './RecipeList/RecipeList'
import './style.css'
import Title from './Title/Title'

function Page1() {
  return (
    <div>
      <Title />
      <MainImage />
      <Recipe />
      <Make />
      <RecipeList />
      <Footer />
    </div>
  )
}

export default Page1
