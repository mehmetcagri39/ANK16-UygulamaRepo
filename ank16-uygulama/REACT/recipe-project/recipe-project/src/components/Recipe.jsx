import React from "react";
import "../assets/style/recipe.scss";

const Recipe = ({ recipe, deleteRecipe, editRecipe }) => {
  return (
    <div className="card">
      <button onClick={() => deleteRecipe(recipe.id)} className="delete">        Delete      </button>
      <button onClick={()=>editRecipe(recipe.id)} className="edit">Edit</button>
      <img src={recipe.image} />
      <div className="card-body">
        <h4>{recipe.title}</h4>
        <p>
          {recipe.description.length > 100
            ? recipe.description.substring(
                0,
                recipe.description.lastIndexOf(" ", 100)
              ) + "..."
             : recipe.description} 
            {/* //100 karakterden kısaysa da göster deniyor */}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
