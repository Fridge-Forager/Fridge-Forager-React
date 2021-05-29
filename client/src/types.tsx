export interface RecipeProps {
  recipes: Recipe[];
}
export type Recipe = [title: string, img: string, url: string];

export type Ingredient = string;

export interface FetchRecipesProp {
  fetchRecipes: Load;
}

export interface Load {
  (params: Ingredient[])
}



