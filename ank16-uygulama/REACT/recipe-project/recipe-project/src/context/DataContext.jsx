import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const companyName = "MCC - The Recipe";

  const [fakeRecipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [search, setSearch] = useState("");

  const addRecipe = useCallback(async (yeni) => {
    let url = "http://localhost:3005/recipes";
    if (!selectedRecipe) {
      setRecipes((prev) => [...prev, yeni]);

      await axios.post(url, yeni);
      setSuccessMessage("Recipe added successfully!");
    } else {
      url += `/${selectedRecipe.id}`;
      const response2 = await axios.put(url, yeni);
      setRecipes((prev) =>
        prev.map((recipe) => {
          if (recipe.id === selectedRecipe.id) {
            return { ...response2.data };
          } else {
            return { ...recipe };
          }
        })
      );
      setSelectedRecipe("");
      setSuccessMessage("Recipe edited successfully!");
    }
  }, [selectedRecipe]);

  const deleteRecipe = async (id) => {
    setRecipes((prev) => prev.filter((fromState) => fromState.id !== id));
    const url = `http://localhost:3005/recipes/${id}`;
    await axios.patch(url, { isDeleted: true });
  };

  const getRecipes = useCallback(async () => {
    const url = "http://localhost:3005/recipes";
    const response = await axios.get(url);
    const fakeRecipes = await response.data;
    setRecipes(fakeRecipes);
  }, []);

  const editRecipe = useCallback((id) => {
    setSelectedRecipe(fakeRecipes.find((item) => item.id === id));
  }, [fakeRecipes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setTitleError(!title);
      setDescError(!description);
      return;
    } else {
      setTitleError(false);
      setDescError(false);
    }

    addRecipe({
      id: (Number(fakeRecipes[fakeRecipes.length - 1]?.id || 0) + 1).toString(),
      title,
      description,
      image,
    });

    setTitle("");
    setDescription("");
    setImage("");
  };

  useEffect(() => {
    if (selectedRecipe) {
      setTitle(selectedRecipe.title);
      setDescription(selectedRecipe.description);
      setImage(selectedRecipe.image);
    }
  }, [selectedRecipe]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <DataContext.Provider
      value={{
        companyName, 
        editRecipe,
        deleteRecipe, 
        fakeRecipes, 
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
        search,
        setSearch,
        successMessage,
        setSuccessMessage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
