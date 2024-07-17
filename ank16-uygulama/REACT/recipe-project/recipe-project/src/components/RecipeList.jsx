import React, { useContext } from "react";
import Recipe from "./Recipe";
import DataContext from "../../context/DataContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


//Edit'e tıklanırsa search bar'ın altında bir edit bölümü açılacak kısmı eklenecek. Ama nereye tıklanırsa tıklanılsın detail sayfasına gidiyor. Edit ve Delete ikonlarıyla; details'a yönlendiren bölüm ayrı alanlarda olmalı.

const RecipeList = () => {
  const{fakeRecipes} = useContext(DataContext);

  return (<>
      <SearchBar/>
    <div className="recipe-list">
      {fakeRecipes.map(recipe => 
      <Link to={recipe.id} key={recipe.id} className="r-card">
      {/* !recipe.isDeleted && */}
        <Recipe recipe={recipe}  key={recipe.id} />
        </Link>
      )}
    </div>
    </>
  );
};

export default RecipeList;
