import React from "react";

const RecipeCard = React.memo(({title, url, image}) => {
  console.log(title, url, image)
  return (
    <div className="recipeCard">
      <a href={url}>
        <img src={image} />
      </a>
      {title}
    </div>
  )
})

export default RecipeCard;