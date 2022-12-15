import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke-buttons',
  templateUrl: './joke-buttons.component.html',
  styleUrls: ['./joke-buttons.component.css']
})
export class JokeButtonsComponent implements OnInit {

  buttonHeading = "Working Buttons"
  clickTime = false;
  position = "right";

  constructor() { }

  ngOnInit() {
  }

  stayStill() {
    let positions = ['left', 'center', 'right']

    positions.splice(positions.indexOf(this.position), 1)

    this.position = positions[Math.floor(Math.random() * positions.length)]
  }
}
