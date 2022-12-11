import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = []//['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   finishedChores = ['Fuck around', 'Kick rocks', 'Beat up biker gang', 'Debauchery', 'Put greese down the drain', 'Put your dick in the box'];

   targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
   target = 'https://cdn2.iconfinder.com/data/icons/sports-110/48/archery-1024.png'

   constructor() { }

   ngOnInit() {
   }

}
