import React from 'react'
import '../assets/style/header.scss'
import AddRecipe from './AddRecipe'
import RecipeList from './RecipeList'
import Navi from './Navi'
import About from './About'
import RecipeDetail from './RecipeDetail'
import Loading from './Loading'
import { Outlet } from 'react-router-dom'


const Header = () => {
    return (<>
    <h2>Welcome to the Recipe Sharing Platform</h2>
    <div>Find and share the best recipes from around the world!</div>

    <Outlet/>

    </>
  )
}

export default Header