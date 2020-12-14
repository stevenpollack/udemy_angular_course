import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouteConfigLoadEnd } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping_list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private _rs: RecipeService,
    private _sls: ShoppingListService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.recipe = this._rs.getRecipe(id);
    });
  }

  sendIngredientsToShoppingList(eventData: Event): void {
    this.recipe.ingredients.forEach((ingredient) => {
      this._sls.addIngredient(ingredient);
    });
  }
}
