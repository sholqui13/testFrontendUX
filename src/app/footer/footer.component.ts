import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialFooter=[
    {
      'icon': 'icon-facebook',
      'url': '#'
    },
    {
      'icon': 'icon-instagram',
      'url': '#'
    },
    {
      'icon': 'icon-twitter',
      'url': '#'
    }
  ]

  datosFooter=[
    {
      'title':'Home',
      'url':'#'
    },
    {
      'title':'Destinations',
      'url':'#'
    },
    {
      'title':'About',
      'url':'#'
    }
  ]

  datosFooter2=[
    {
      'title':'More search',
      'url':'#'
    },
    {
      'title':'Blog',
      'url':'#'
    },
    {
      'title':'Testimonials',
      'url':'#'
    }
  ]

  datosFooter3=[
    {
      'title':'Manage My Bookings',
      'url':'#'
    },
    {
      'title':'Checkin',
      'url':'#'
    },
    {
      'title':'Hotel',
      'url':'#'
    },
    {
      'title':'Cars',
      'url':'#'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
