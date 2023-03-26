import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  infoCardNotices=[
    {
      'imageCard':'../../../../assets/images/banners/moscow.jpg',
      'text1':'Trip to Moscow',
      'text2':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris. ',
      'text3':'Price $600,86',
    },
    {
      'imageCard':'../../../../assets/images/banners/puerto-rico.jpg',
      'text1':'Trip to Puerto Rico',
      'text2':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris. ',
      'text3':'Price $600,86',
    },
    {
      'imageCard':'../../../../assets/images/banners/honduras.jpg',
      'text1':'Trip to Honduras',
      'text2':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris. ',
      'text3':'Price $600,86',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
