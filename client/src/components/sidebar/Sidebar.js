import React, {useState} from "react";

const Sidebar = () => {
  const [ingredient, setIngredient] = useState('');

  return (
    <>
      <div className="sidebar col">
        <div className="formDiv">
          <div className="form">
            Add an Ingredient
          </div>
          <button type="button" className="addIngredientBtn">Add Item</button>
        </div>
        <div className="ingredientsList">
          <div className="foodItem">eggs</div>
          <button type="button" className="removeBtn">Remove Item</button>
        </div>
          <button type="button" className="searchBtn">Search Recipes</button>
        </div>
    </>
  );
};
export default Sidebar;
