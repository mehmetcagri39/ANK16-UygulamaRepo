import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { recipes } from '../data/data.json';


const RecipeDetail = () => {
    const params = useParams()
    // console.log(params);
    // console.log(params.blogId);
    
    const parametre = params.recipeId;
  return (
    
    <div className='detay' >
        <img src={recipes[parametre-1].image} alt={recipes[parametre-1].alt} />
        <h3>{recipes[parametre-1].title}</h3>
        <p>{recipes[parametre-1].description}</p>
        <Link to="/ank-16/RecipeList"> Click here to go back to the recipe list.</Link>
    </div>

  )
}

export default RecipeDetail