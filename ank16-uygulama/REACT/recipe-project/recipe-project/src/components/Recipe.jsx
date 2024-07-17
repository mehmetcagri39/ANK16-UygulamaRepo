import React, { useContext } from "react";
import "../assets/style/recipe.scss";
import DataContext from "../../context/DataContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";


const Recipe = ({ recipe }) => {
  const { deleteRecipe, editRecipe, search } = useContext(DataContext);
  return (
    (recipe.title.toLowerCase().startsWith(search.toLowerCase()) ||
      recipe.description.toLowerCase().startsWith(search.toLowerCase())) && ( //ingredient ile bulma da eklenebilir...
      <div className="card">
        <button onClick={() => deleteRecipe(recipe.id)} className="delete">
        <FaRegTrashAlt size={40}/>
        </button>
        <button onClick={() => editRecipe(recipe.id)} className="edit">
        <MdModeEditOutline size={50}/>
        </button>
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
    )
  );
};

export default Recipe;
