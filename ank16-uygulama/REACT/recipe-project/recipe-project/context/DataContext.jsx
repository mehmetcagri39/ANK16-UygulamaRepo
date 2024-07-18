import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

// context oluşturulması
const DataContext = createContext();

// oluşturulan context için bir sağlayıcı oluşturulur.
export const DataProvider = ({ children }) => {
  // export yazılma sebebi dışarıda da kullanabilmek için

  // yapıdaki tüm state, metod, ...etc. buraya taşınacak.
  const companyName = "MCC - The Recipe";

  // const [stateAdi,stateMetodu] = useState(initialValue);
  const [fakeRecipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [search, setSearch] = useState("");

  const addRecipe = useCallback(async (yeni) => {
    let url = "http://localhost:3005/recipes";
    if (!selectedRecipe) {
      setRecipes((prev) => [...prev, yeni]);

      const response = await axios.post(url, yeni);
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
    }
  }, [selectedRecipe]);

  const deleteRecipe = async (id) => {
    setRecipes((prev) => prev.filter((fromState) => fromState.id !== id));
    const url = `http://localhost:3005/recipes/${id}`;
    const response = await axios.patch(url, { isDeleted: true }); // axios patch kullanıldı
  };
  // axios delete yerine patch kullanıldı. axios.delete yorum satırına alındı fakat yine de çalışıyor.
  // const response = await axios.delete(url); !! Tehlikeli !!

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

    if (
      (title === "" && description === "") ||
      (title !== "" && description === "") ||
      (title === "" && description !== "")
    ) {
      setTitleError(true);
      setDescError(true);
      return;
    } else {
      setTitleError(false);
      setDescError(false);
    }

    addRecipe({
      id: (Number(fakeRecipes[fakeRecipes.length - 1].id) + 1).toString(),
      title: title,
      description: description,
      image: image,
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
  }, []);

  return (
    <DataContext.Provider
      value={{
        companyName, // Navi componentinden gelen
        editRecipe,
        deleteRecipe, // Recipe componentinden gelenler
        fakeRecipes, // RecipeList componentinden gelenler
        // Sections componentinden gelenler
        selectedRecipe,
        title,
        description,
        image,
        setTitle,
        setDescription,
        setImage,
        handleSubmit,
        titleError,
        descError, // Sections componentinden gelenler
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
