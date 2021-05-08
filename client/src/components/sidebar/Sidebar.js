/* eslint-disable react/no-array-index-key */
import React, {useState} from "react";

const Sidebar = () => {
  const [ingredient, setIngredient] = useState('');
  const [ingredientList, setIngredientList] = useState([]);

  const handleChange = (e) => {
    if (e.target.id === 'ingredient') {
      setIngredient(e.target.value);
    }
  };

  const addIngredient = () => {
    setIngredientList([...ingredientList, ingredient]);
    setIngredient('');
  }

  const deleteIngredient = (item) => {
    setIngredientList(ingredientList.filter((e) => e !== item));
  }

  const searchForRecipes = () => {
    console.log('searched');
  }

  return (
    <>
      <div className="sidebar col">
        <div className="formDiv">
          <div className="form__group">
            <input
              type="text"
              className="form__field"
              placeholder="Ingredient"
              name="ingredient"
              id="ingredient" required
              value={ingredient}
              onChange={handleChange}
            />
            <label htmlFor="ingredient" className="form__label">Ingredient</label>
          </div>
          <button
            type="button"
            className="addIngredientBtn"
            onClick={addIngredient}
          >
            Add Item
          </button>
        </div>
        <div className="ingredientsList">
          {ingredientList.map( (item, idx) => 
          <div key={idx.toString()+item}>
            <div className="foodItem">{item}</div>
            <button 
              type="button" 
              className="removeBtn"
              onClick={() => deleteIngredient(item)}
            >
                Remove Item
            </button>
            </div>
          )}
          
        </div>
          <button
          type="button"
          className="searchBtn"
          onClick={() => searchForRecipes()}
          >Search Recipes</button>
        </div>
    </>
  );
};
export default Sidebar;
