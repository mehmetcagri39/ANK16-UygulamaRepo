import React, { useContext } from 'react';
import '../assets/style/section.scss';
import DataContext from '../context/DataContext';


//Ürün detail sayfasına gitmek için ürünün üstüne tıklamak yeterlidir. Edit butonu çalıştırılmak isteniyorsa da edit'e tıklanıp
// daha sonra Add Recipe sayfasına gidilmelidir ve artık oradan ürün istenilen şekilde güncellenebilir.

const AddRecipe = () => {
  const {
    selectedRecipe,
    title,
    description,
    image,
    setTitle,
    setDescription,
    setImage,
    handleSubmit,
    titleError,
    descError,
    successMessage,
    setSuccessMessage
  } = useContext(DataContext);

  return (
    <form onSubmit={(e) => {
      handleSubmit(e);
      setTimeout(() => setSuccessMessage(""), 3000); 
    }}>
      <h3>{selectedRecipe ? "Edit Recipe" : "Add Recipe"}</h3>
      {titleError && <p>Both recipe name and recipe description must be filled!</p>}
      <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Recipe Name' />
      {descError && <p>Both recipe name and recipe description must be filled!</p>}
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Recipe Description'></textarea>
      <input value={image} onChange={e => setImage(e.target.value)} type="url" placeholder='Recipe Image(url)' />
      <input type="submit" value={selectedRecipe ? "Edit Recipe" : "Add Recipe"} />
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default AddRecipe;
