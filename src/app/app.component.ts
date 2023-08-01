import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_01aug';
  updatedNumber: number;

  leftEnable: boolean = true;
  rightEnable: boolean = true;

  changedNumber(eventNumber: number) {
    this.updatedNumber = eventNumber;
    console.log("number received in parent: " + this.updatedNumber);
  }

  ToggleLeft() {
    this.leftEnable = !this.leftEnable;
  }

  ToggleRight() {
    this.rightEnable = !this.rightEnable;
  }

}
