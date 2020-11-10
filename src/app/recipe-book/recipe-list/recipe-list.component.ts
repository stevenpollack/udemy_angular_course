import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Tikka Masala',
      'A yummy Indian dish',
      'https://www.closetcooking.com/wp-content/uploads/2019/11/Chicken-Tikka-Masala-1200-8412.jpg'
    ),
    new Recipe(
      'Biscuits & Gravy',
      'A southern classic!',
      'https://www.thechunkychef.com/wp-content/uploads/2015/02/IMG_7651-2.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
