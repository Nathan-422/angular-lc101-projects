import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   displayWarning = false;
   constructor() { }

   ngOnInit() {
   }

   addMovie(input:string) {
      if (input === "") {
         this.displayWarning = true;
         return;
      } else if (this.movies.includes(input.trim())) {
         this.displayWarning = true;
         return;
      }
      
      this.displayWarning = false;
      this.movies.push(input);
   }
}