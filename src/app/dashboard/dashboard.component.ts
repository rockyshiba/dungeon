import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta ) { }

  ngOnInit() {
    this.titleService.setTitle('DnD5e');
    this.metaService.updateTag({
      name: 'description', content: 'Dnd5e web browser application using Dnd5e api'
    });
  }

}
