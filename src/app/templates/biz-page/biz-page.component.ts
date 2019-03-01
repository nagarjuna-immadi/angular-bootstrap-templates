import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biz-page',
  templateUrl: './biz-page.component.html',
  styleUrls: ['./biz-page.component.scss']
})
export class BizPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    './assets/img/intro-carousel/1.jpg',
    './assets/img/intro-carousel/2.jpg',
    './assets/img/intro-carousel/3.jpg',
    './assets/img/intro-carousel/4.jpg'
  ];

}
