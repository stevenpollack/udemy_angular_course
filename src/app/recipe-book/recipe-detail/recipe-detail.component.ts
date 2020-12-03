import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping_list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private _rs: RecipeService,
    private _sls: ShoppingListService) {}

  ngOnInit(): void {  }

  @Input() recipe: Recipe;

  sendIngredientsToShoppingList(eventData: Event): void {
    this.recipe.ingredients.forEach(ingredient =>
      {
        this._sls.addIngredient(ingredient);
      });
  }
}
