import React, { useEffect } from "react";
import { useSelector } from "react-redux"

import RecipeCard from "../recipeCard/RecipeCard"
const Display = React.memo(() => {
  const recipes = useSelector((state) => state.recipes)
  console.log("Display.js -- recipes:", Array.isArray(recipes));
  if (!Array.isArray(recipes)) return <div> </div>;
  return (
    <div className="display_col">
      {recipes.map((recipe, idx) => (
        <RecipeCard key={idx} title={recipe.title} image={recipe.image} url={recipe.url} />
      ))}
    </div>
  );
});

export default Display;
