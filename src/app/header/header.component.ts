import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datosMenu=[
    {
      'titulo':'Home',
      'url':'#'
    },
    {
      'titulo':'About',
      'url':'#'
    },
    {
      'titulo':'Destinations',
      'url':'#'
    },
    {
      'titulo':'Contact',
      'url':'#'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  
  public openMenu: boolean = false;

  showMenu(): void {
    this.openMenu = !this.openMenu;
  }
  
  datosMenu2=[
    {
      'idioma':'RU - Russian',
      'url':'#'
    },
    {
      'idioma':'DE - German',
      'url':'#'
    },
    {
      'idioma':'FR - French',
      'url':'#'
    }
  ]

  public openMenu2: boolean = false;

  showMenu2(): void {
    this.openMenu2 = !this.openMenu2;
  }

}
