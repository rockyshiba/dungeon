import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  breakpointColSpan: string;
  breakpointRowHeight: string;

  dashboardContent = [
    {
      'title': 'Spells',
      'routerLink': '/spells/',
      'content': 'A complete list of the spells used in DnD5e. Find or browse the spells you want more information on.',
      'linkText': 'Click here for spells.' 
    },
    {
      'title': 'Classes',
      'routerLink': '',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'linkText': 'Click here for classes.'
    }
  ];

  resizeTiles(): void {
    this.breakpointColSpan = ( window.innerWidth <= 400 ) ? "3" : "1";
    this.breakpointRowHeight = ( window.innerWidth <= 400 ) ? "1:1" : "1:0.5";  
  }
  constructor() { }

  ngOnInit() {
    this.resizeTiles();
  }

}
