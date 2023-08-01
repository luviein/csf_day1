import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  // Optional to put semicolon

  fruit1: string = "Durian";

  fullName: string = "yenleng";

  fontWeight: string = "bold";

  fontSize: string = "xxx-large"

  testClick() {
    console.log("Button Test Clicked")
  };

  //instantiating array in JS complies to following structure below
  fruits: {name: string, quantity: number}[] = [];

  //manually push to populate array above
  ngOnInit(): void {
    this.fruits.push({name: "Mango", quantity: 10});
    this.fruits.push({name: "Durian", quantity: 5});
    this.fruits.push({name: "Avocado", quantity: 9});
  }

}
