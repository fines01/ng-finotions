import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // navigates to section th the current page
  navigateTo(section: string){
    window.location.hash = '';
    window.location.hash = section;
  }

}
