import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  activeSection: string;

  parseNav(eventData: string) {
    this.activeSection = eventData;
    //this.ngOnChanges();
  }

  ngOnChanges(): void {
    
  }
}
