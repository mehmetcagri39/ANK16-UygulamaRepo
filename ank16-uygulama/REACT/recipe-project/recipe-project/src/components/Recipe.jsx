import React, { useContext } from "react";
import "../assets/style/recipe.scss";
import DataContext from "../context/DataContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";



//Ürün detail sayfasına gitmek için ürünün üstüne tıklamak yeterlidir. Edit butonu çalıştırılmak isteniyorsa da edit'e tıklanıp
// daha sonra Add Recipe sayfasına gidilmelidir ve artık oradan ürün istenilen şekilde güncellenebilir.

const Recipe = ({ recipe }) => {
  const { deleteRecipe, editRecipe, search } = useContext(DataContext);
  const{isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Eğer tıklanan element delete veya edit butonu değilse
    if (!e.target.closest(".delete") && !e.target.closest(".edit")) {
      navigate(`/ank-16/RecipeList/${recipe.id}`);
    }
  };

  return (
    (recipe.title.toLowerCase().startsWith(search.toLowerCase()) ||
      recipe.description.toLowerCase().startsWith(search.toLowerCase())) && (
      <div className="card" onClick={handleCardClick}>
        {isAuthenticated&&
        <>
        <button onClick={() => deleteRecipe(recipe.id)} className="delete">
          <FaRegTrashAlt size={40} />
        </button>
        <button onClick={() => editRecipe(recipe.id)} className="edit">
          <MdModeEditOutline size={50} />
        </button>
        </>
        }
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
          </p>
        </div>
      </div>
    )
  );
};

export default Recipe;
