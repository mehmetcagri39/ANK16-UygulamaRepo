import React, { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Header from './components/Header'
import Section from './components/Section'
import RecipeList from './components/RecipeList'
import Footer from './components/Footer'
import axios from 'axios'




const App = () => {

  const companyName = "MCC - The Recipe";

  const[fakeRecipes, setRecipes] = useState([]);
  const[selectedRecipe, setSelectedRecipe] = useState("");


  const addRecipe = async (yeni) => {
    let url = "http://localhost:3005/recipes";
    if (!selectedRecipe) {
      setRecipes(prev=>[...prev,yeni])

      const response = await axios.post(url,yeni);
      
    }
    else{
      url+=`/${selectedRecipe.id}`;
      const response2 = await axios.put(url,yeni);
      setRecipes(prev=>
        prev.map(recipe=>{
          if (recipe.id===selectedRecipe.id) {
            return {...response2.data}            
          }
          else{
            return {...recipe}
          }
        })
      )
      setSelectedRecipe("");
    }
    // {
    //   method:"POST",
    //   headers: {"Content-Type":"application-json"},
    //   body: JSON.stringify(yeni)
    // });
    // if (cevap.status ===201) {
    //   setRecipes(prev=>[...prev, yeni])      
    // }
  }

  const deleteRecipe = async (id) =>{
    setRecipes(prev=>prev.filter(fromState=>fromState.id!==id));
    const url =`http://localhost:3005/recipes/${id}`
    const response = await axios.patch(url,{isDeleted: true});
  }

  const getRecipes = async () =>{
        
        let url = "http://localhost:3005/recipes"
        const response = await fetch(url);
        const fakeRecipes = await response.json();
        console.log(fakeRecipes);
        setRecipes(fakeRecipes);  }

  const editRecipe = (id) =>{
    setSelectedRecipe(fakeRecipes.find(item=>item.id===id));
    console.log(fakeRecipes.find(item=>item.id===id));
  }

useEffect(()=>{
  getRecipes();
  }
)

  return (
    <>
      <Navi navHead={companyName}/>
      <Header/>
      <Section selectedRecipe={selectedRecipe} addRecipe={addRecipe}  fakeRecipes={fakeRecipes}/>
      <RecipeList fakeRecipes={fakeRecipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe}/>
    </>
  )
}

export default App
