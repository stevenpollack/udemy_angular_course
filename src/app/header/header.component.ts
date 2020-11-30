import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navEvent = new EventEmitter<string>();
  
  public collapsed : boolean = true;
  
  constructor() { }
  
  ngOnInit(): void {
    let collapsed = true;
  }

  onRecipesClick(): void {
    this.navEvent.emit("recipes");
  }

  onShoppingListClick(): void {
    this.navEvent.emit("shopping-list");
  }
}
