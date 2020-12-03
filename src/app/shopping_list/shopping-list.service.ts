import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Curry Powder', 1),
    new Ingredient('Chicken', 2)
  ]
  
  ingredientArrayModified = new EventEmitter<Ingredient[]>();

  constructor() { }
  
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  private publishChanges(): void {
    this.ingredientArrayModified.emit(this.ingredients.slice());
  }
  
  addIngredient(ingredient: Ingredient) {
    const ingredientIndex = this.ingredients.findIndex(x => x.name == ingredient.name);
    if (ingredientIndex != -1)
    {
      this.ingredients[ingredientIndex].amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
    this.publishChanges();
  }
  
  deleteIngredient(deletedIngredient: Ingredient): void {
    const ingredientIndex = this.ingredients.findIndex(x => x.name == deletedIngredient.name);
    if (ingredientIndex != -1) {
      this.ingredients[ingredientIndex].amount -= deletedIngredient.amount;
      
      if (this.ingredients[ingredientIndex].amount <= 0) {
        this.ingredients.splice(ingredientIndex);
      }

      this.publishChanges();
    }
  }
}
