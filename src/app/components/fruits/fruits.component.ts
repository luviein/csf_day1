import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  // Optional to put semicolon

  fruit: string = "Durian";

  fullName: string = "yenleng";

  fontWeight: string = "bold";

  fontSize: string = "xxx-large"

  testClick() {
    console.log("Button Test Clicked")
  };

  
}
