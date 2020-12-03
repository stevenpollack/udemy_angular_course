import { Component, OnInit  } from '@angular/core';
import { __rest } from 'tslib';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _rs: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this._rs.getRecipes();
  }
}
