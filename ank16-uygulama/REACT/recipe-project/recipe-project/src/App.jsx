import React from 'react';
import Navi from './components/Navi';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import AddRecipe from './components/AddRecipe';
import RecipeDetail from './components/RecipeDetail';
import Loading from './components/Loading';






const App = () => {

  

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/*" element={<Loading/>}/>
        <Route path="ank-16" element={<Navi />} > 
            <Route path="Header" element={<Header />} />
            <Route path="RecipeList" element={<RecipeList />} />
            <Route path="RecipeList/:recipeId" element={<RecipeDetail />} />
            <Route path="AddRecipe" element={<AddRecipe />} />
            <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>

   
  )
}

export default App
