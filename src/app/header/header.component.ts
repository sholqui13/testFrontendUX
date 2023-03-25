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

}
