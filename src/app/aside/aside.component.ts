import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  datosAside=[
    {
      'title':'Check-in',
      'url':'#'
    },
    {
      'title':'Manage My Booking',
      'url':'#'
    },
    {
      'title':'Search',
      'url':'#'
    },
    {
      'title':'Destinations',
      'url':'#'
    },
    {
      'title':'Members',
      'url':'#'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
