import React, { FunctionComponent } from "react";
import {Recipe, RecipeProps} from '../../types';

const Display: FunctionComponent<RecipeProps> = React.memo(({recipes}) => {
  return <div className="display col">{recipes}</div>;
});

export default Display;
