import React from "react";
import RichText from "../RichText";
import styles from '@/styles/RecipeCard.module.css';

interface RecipeProps {
  recipe: {
    recipeName: string;
    author: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    servings: number;
    ingredients: any;
    instructions: string;
    notes: string;
  };
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className={styles.recipe}>
      <h2 className={styles.recipeName}>{recipe.recipeName}</h2>
      <p className={styles.recipeAuthor}>Author: {recipe.author}</p>
      <p className={styles.recipeTime}>
        Prep Time: {recipe.prepTime} | Cook Time: {recipe.cookTime} | Total
        Time: {recipe.totalTime} | Servings: {recipe.servings}
      </p>
      <div className={styles.recipeIngredients}>
        <h3>Ingredients:</h3>
        <RichText desc={recipe.ingredients} />
      </div>
      <div className={styles.recipeInstructions}>
        <h3>Instructions:</h3>
        <span>{recipe.instructions}</span>
      </div>
      <p className={styles.recipeNotes}>Notes: {recipe.notes}</p>
    </div>
  );
};

export default Recipe;
