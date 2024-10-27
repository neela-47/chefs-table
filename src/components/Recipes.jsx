import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() =>{

      fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data))

    },[])
    return (
        <div>
            <h1>foods : {recipes.length}</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}
                    handleWantToCook={handleWantToCook}
                >

                </Recipe>)
            }
            </div>
        </div>
    );
};

export default Recipes;