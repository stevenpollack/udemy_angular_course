import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Tikka Masala',
      'A yummy Indian dish',
      'https://www.closetcooking.com/wp-content/uploads/2019/11/Chicken-Tikka-Masala-1200-8412.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Tikka Masala Spice', 1)]
    ),
    new Recipe(
      'Biscuits & Gravy',
      'A southern classic!',
      'https://www.thechunkychef.com/wp-content/uploads/2015/02/IMG_7651-2.jpg',
      [
        new Ingredient('Biscuits', 5),
        new Ingredient('Chicken', 1),
        new Ingredient('Flour', 1),
      ]
    ),
  ];

  recipeClickEvent = new EventEmitter<Recipe>();

  recipeClicked(recipe: Recipe): void {
    this.recipeClickEvent.emit(recipe);
    console.log('clicked recipe for ' + recipe.name);
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  constructor() {}
}
