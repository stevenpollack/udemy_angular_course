import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  
  constructor(private _rs: RecipeService) {}

  selectedRecipe: Recipe;

  ngOnInit(): void {
    this._rs.recipeClickEvent.subscribe((clickedReciped: Recipe) => {
      console.log('event fired');
      this.selectedRecipe = clickedReciped;
    });
  }
}
