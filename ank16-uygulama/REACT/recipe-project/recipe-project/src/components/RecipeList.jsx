import React, { useContext } from "react";
import Recipe from "./Recipe";
import DataContext from "../context/DataContext";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const { fakeRecipes } = useContext(DataContext);

  // isDeleted: true olanları filtrelemek için
  const visibleRecipes = fakeRecipes.filter(recipe => !recipe.isDeleted);

  return (
    <>
      <SearchBar />
      <div className="recipe-list">
        {visibleRecipes.map((recipe) => (
          <div key={recipe.id} className="r-card">
            <Recipe recipe={recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
 