import React, { FunctionComponent } from "react";
import { selectIngredients } from "../../redux/ingredientsSlice";
import {Recipe, RecipeProps} from '../../types';

const Display: FunctionComponent<RecipeProps> = React.memo(({recipes}) => {
  return <div className="display col">hi</div>;
});

export default Display;
