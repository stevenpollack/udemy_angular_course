import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  selectedIngredient: Ingredient;
  
  
  constructor(private _sls: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this._sls.getIngredients();
    this._sls.ingredientArrayModified.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients 
    )
  }

}
