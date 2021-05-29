/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import {FetchRecipesProp} from '../../types';

const Sidebar: FunctionComponent<FetchRecipesProp> = ({fetchRecipes}) => {
  const [ingredient, setIngredient] = useState("");
  const [ingredientSet, setIngredientSet] = useState(new Set());
  const [ingredientList, setIngredientList] = useState([]);
  const [readyToSearch, setReadyToSearch] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (readyToSearch) {
      console.log("ready to search");
    }
  }, [readyToSearch]);

  const handleChange = (e) => {
    if (e.target.id === "ingredient") {
      setIngredient(e.target.value.toLowerCase());
    }
  };

  const addIngredient = () => {
    // setIngredientList([...ingredientList, ingredient]);
    if (!ingredientSet.has(ingredient)) {
      setIngredientList([...ingredientList, ingredient]);
      setIngredientSet(ingredientSet.add(ingredient));
      setReadyToSearch(false);
    }
    setIngredient("");
  };

  const deleteIngredient = (item) => {
    // setIngredientList(ingredientList.filter((e) => e !== item));
    // dispatch(deleteIngredient(item));
    if (ingredientSet.has(item)) {
      setIngredientList(ingredientList.filter((e) => e !== item));
      setIngredientSet(ingredientSet.delete(item));
      setReadyToSearch(false);
    }
  };

  return (
    <div>
      <div className="sidebar col">
        <div className="formDiv">
          <div className="form__group">
            <input
              type="text"
              className="form__field"
              placeholder="Ingredient"
              name="ingredient"
              id="ingredient"
              required
              value={ingredient}
              onChange={handleChange}
            />
            <label htmlFor="ingredient" className="form__label">
              Ingredient
            </label>
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
          {ingredientList.map((item, idx) => (
            <div key={idx.toString() + item}>
              <div className="foodItem">{item}</div>
              <button
                type="button"
                className="removeBtn"
                onClick={() => deleteIngredient(item)}
              >
                Remove Item
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="searchBtn"
          onClick={() => fetchRecipes(ingredientList)}
        >
          Search Recipes
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
