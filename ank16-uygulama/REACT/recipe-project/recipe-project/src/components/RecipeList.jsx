import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ fakeRecipes, deleteRecipe, editRecipe }) => {
  return (<>
  <h3 style={{marginLeft:"25px"}}></h3>
    <div className="recipe-list">
      {fakeRecipes.map(recipe => 
      !recipe.isDeleted &&
        <Recipe recipe={recipe} deleteRecipe={deleteRecipe} editRecipe={editRecipe} key={recipe.id} />
      )}
    </div>
    </>
  );
};

export default RecipeList;
