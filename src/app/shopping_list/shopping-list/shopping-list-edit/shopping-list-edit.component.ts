import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private _sls: ShoppingListService) { }

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Input() selectedIngredient: Ingredient;

  ngOnInit(): void {
    this.nameInput.nativeElement.value = this.selectedIngredient.name;
    this.amountInput.nativeElement.value = this.selectedIngredient.amount;
  }

  onAddClick(): void {
    const addedIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this._sls.addIngredient(addedIngredient);
  }

  onDeleteClick(): void {
    const deletedIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this._sls.deleteIngredient(deletedIngredient);
  }

  onClearClick(): void {
    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
  }

}
