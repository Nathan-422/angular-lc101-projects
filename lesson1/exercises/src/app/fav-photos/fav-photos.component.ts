import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://live.staticflickr.com/589/31441625712_0dd28dc419_c.jpg';
  image2 = 'https://live.staticflickr.com/4703/24866041587_603e13e07c_c.jpg';
  image3 = 'https://live.staticflickr.com/286/30732472003_8660ab8801_c.jpg';

  img1alt = "Tourists at Hvalfjörður"; 
  img2alt = "Mosfellsbær from Southern Side of Esjan";
  img3alt = "Northern Lights 10/24/2016";

  constructor() { }

  ngOnInit() {
  }

}