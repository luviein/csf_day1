import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_01aug';
  updatedNumber: number;
  changedNumber(eventNumber: number) {
    this.updatedNumber = eventNumber;
    console.log("number received in parent: " + this.updatedNumber);
  }
}
