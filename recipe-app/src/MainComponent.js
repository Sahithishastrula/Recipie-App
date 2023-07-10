import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";


const MainComp=()=>{
    const API_ID="d8bbdf1d";
    const API_Key="13bb6243a2c50a0ccb3d503d2555981c	";
    const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("potato");
    //const response = await fetch(`https://api.edamam.com/search?q=${selected}&app_id=${API_ID}&app_key=${API_Key}&from=0&to=3&calories=591-722&health=alcohol-free`);

   
    useEffect(() => {
        getRecipes();
      }, [query])
      const getRecipes = async () => {
        const response = await fetch
              (`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_Key}&from=0&to=3&calories=591-722&health=alcohol-free`);
        const data = await response.json();
        setRecipes(data.hits);
        // console.log(data);
      
      };
      const updateSearch = e => {
        setSearch(e.target.value);
      };
      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
      }
      
      return (
        <div className="App">
          <form className="search-form" onSubmit={getSearch}  >
            <input className="search-bar" type="text" value={search}
                 onChange={updateSearch} />
            <button className="search-button" type="submit" >
                 Search
            </button>
          </form>
          <div className="recipes">
            {recipes.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
  
                ))}
              </div>
          
            </div>
          );
}
export default MainComp;